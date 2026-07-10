import { onBeforeUnmount, onMounted, type Ref } from 'vue'
import { createNoise, type Noise } from './generative/noise'

/*
 * useGenerativeLines — shared Canvas 2D drawing base for Tier 2 生成線画
 * (DESIGN.md §3.5). Owns the discipline that every generative-line component
 * must share, so the individual motifs only supply a `render` function:
 *
 *   - rAF loop throttled to ~30fps (呼吸のテンポなら 30fps で知覚されない)
 *   - stops when off-screen (IntersectionObserver) or the tab is hidden
 *     (document visibilitychange) — no CPU spent when unseen
 *   - devicePixelRatio clamped to 2; resize debounced then canvas rebuilt
 *   - prefers-reduced-motion: reduce → one static frame at a fixed seed/time
 *     (構図として成立する静止フレーム), no loop
 *   - dark mode via matchMedia('(prefers-color-scheme: dark)') because a
 *     canvas cannot read CSS variables; line colour switches light⇄dark
 *   - SSR-safe: all window/document access happens in onMounted
 *
 * The render function receives CSS-pixel dimensions (dpr is handled by a
 * context transform) and must not change the element's box — occupied area is
 * fixed so there is never any layout shift (CLS ゼロ).
 */

export interface RenderState {
  ctx: CanvasRenderingContext2D
  /** Width in CSS pixels. */
  width: number
  /** Height in CSS pixels. */
  height: number
  /** Scaled time in seconds (elapsed × timeScale). Frozen while paused. */
  time: number
  /** Resolved stroke colour for the current colour scheme. */
  color: string
  isDark: boolean
  reduced: boolean
  noise: Noise
  density: number
}

export interface GenerativeLinesOptions {
  /** Seed for the deterministic noise field. */
  seed?: number
  /** Motif-defined "how many lines" knob, forwarded to render(). */
  density?: number
  /** Multiplier applied to elapsed seconds before it reaches render(). */
  timeScale?: number
  /** Target frame rate; the loop is throttled to this. Default 30. */
  fps?: number
  /** Line colour tokens (DESIGN §3.1). Light = primary, dark = white. */
  lineColor?: { light: string; dark: string }
  /** Fixed time used for the reduced-motion static frame. */
  staticTime?: number
  /** Draws one frame. Called ~fps times/second while visible. */
  render: (state: RenderState) => void
}

export function useGenerativeLines(
  canvasRef: Ref<HTMLCanvasElement | null>,
  options: GenerativeLinesOptions
) {
  const {
    seed = 1,
    density = 1,
    timeScale = 1,
    fps = 30,
    lineColor = { light: '#0C2340', dark: '#FFFFFF' },
    staticTime = 30,
    render
  } = options

  const frameInterval = 1000 / fps

  let ctx: CanvasRenderingContext2D | null = null
  let noise: Noise | null = null
  let width = 0
  let height = 0

  let rafId = 0
  let running = false
  let inView = false
  let tabVisible = true
  let reduced = false
  let isDark = false

  let elapsed = 0 // accumulated animated seconds; frozen while paused
  let lastNow = 0
  let lastFrame = 0

  let io: IntersectionObserver | null = null
  let darkMq: MediaQueryList | null = null
  let reducedMq: MediaQueryList | null = null
  let resizeTimer = 0

  const currentColor = () => (isDark ? lineColor.dark : lineColor.light)

  function measure() {
    const canvas = canvasRef.value
    if (!canvas || !ctx) return
    const rect = canvas.getBoundingClientRect()
    width = rect.width
    height = rect.height
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.max(1, Math.round(width * dpr))
    canvas.height = Math.max(1, Math.round(height * dpr))
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  function draw(time: number) {
    if (!ctx || !noise || width === 0 || height === 0) return
    ctx.clearRect(0, 0, width, height)
    ctx.globalAlpha = 1
    render({
      ctx,
      width,
      height,
      time,
      color: currentColor(),
      isDark,
      reduced,
      noise,
      density
    })
  }

  /** One reproducible still — used for reduced-motion and paused states. */
  function drawStatic() {
    draw(staticTime)
  }

  function loop(now: number) {
    rafId = requestAnimationFrame(loop)
    if (now - lastFrame < frameInterval) return
    const delta = lastNow ? (now - lastNow) / 1000 : 0
    lastNow = now
    lastFrame = now
    elapsed += delta
    draw(elapsed * timeScale)
  }

  function start() {
    if (running || reduced || !inView || !tabVisible) return
    running = true
    lastNow = 0
    lastFrame = 0
    rafId = requestAnimationFrame(loop)
  }

  function stop() {
    running = false
    if (rafId) cancelAnimationFrame(rafId)
    rafId = 0
  }

  function onResize() {
    window.clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(() => {
      measure()
      // Redraw the current still so a paused/reduced canvas isn't left blank.
      if (!running) (reduced ? drawStatic : () => draw(elapsed * timeScale))()
    }, 150)
  }

  function onVisibility() {
    tabVisible = !document.hidden
    if (tabVisible) start()
    else stop()
  }

  function onDark(e: MediaQueryListEvent) {
    isDark = e.matches
    if (!running) (reduced ? drawStatic : () => draw(elapsed * timeScale))()
  }

  function onReduced(e: MediaQueryListEvent) {
    reduced = e.matches
    if (reduced) {
      stop()
      drawStatic()
    } else {
      start()
    }
  }

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return
    ctx = canvas.getContext('2d')
    if (!ctx) return
    noise = createNoise(seed)

    darkMq = window.matchMedia('(prefers-color-scheme: dark)')
    reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    isDark = darkMq.matches
    reduced = reducedMq.matches
    tabVisible = !document.hidden

    measure()

    // Paint one frame immediately so nothing pops in when the loop starts.
    if (reduced) drawStatic()
    else draw(0)

    darkMq.addEventListener('change', onDark)
    reducedMq.addEventListener('change', onReduced)
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)

    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          inView = entries[0]?.isIntersecting ?? false
          if (inView) start()
          else stop()
        },
        { threshold: 0 }
      )
      io.observe(canvas)
    } else {
      inView = true
      start()
    }
  })

  onBeforeUnmount(() => {
    stop()
    window.clearTimeout(resizeTimer)
    io?.disconnect()
    darkMq?.removeEventListener('change', onDark)
    reducedMq?.removeEventListener('change', onReduced)
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)
  })
}
