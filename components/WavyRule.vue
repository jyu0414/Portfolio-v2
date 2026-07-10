<template>
  <div class="wavy-rule" :style="{ height: `${height}px` }" aria-hidden="true">
    <canvas ref="canvas" class="wavy-rule__canvas" />
  </div>
</template>

<script setup lang="ts">
/*
 * WavyRule — Tier 2 小品 (DESIGN.md §3.5「波打つ罫線」).
 * A horizontal hairline that undulates like the surface of water. The occupied
 * box is fixed (height + amplitude reserved), so it never shifts layout.
 *
 * Discipline (§3.5「動きの規律」):
 *   - amplitude ±3px (amp 4 × simplex peak ≈ 0.75)
 *   - one cycle ≈ 22s  (timeScale 0.045, feature travels ~1 noise unit / cycle)
 *   - 1px line, low contrast (line colour at 0.4 alpha)
 *   - reduced-motion → a straight static hairline
 */
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    seed?: number
    height?: number
  }>(),
  { seed: 7, height: 22 }
)

const canvas = ref<HTMLCanvasElement | null>(null)

const AMP = 4 // px; simplex peaks ~0.75 → effective ±3px
const WAVELENGTH = 0.006 // spatial noise scale across x
const SEGMENT = 8 // px between polyline points

useGenerativeLines(canvas, {
  seed: props.seed,
  timeScale: 0.045, // → ~22s per undulation cycle (≥ 20s)
  fps: 30,
  staticTime: 0,
  render({ ctx, width, height, time, color, reduced, noise }) {
    const mid = height / 2
    ctx.lineWidth = 1
    ctx.lineCap = 'round'
    ctx.strokeStyle = color
    ctx.globalAlpha = 0.4
    ctx.beginPath()
    for (let x = 0; x <= width; x += SEGMENT) {
      // reduced-motion draws a straight line (amplitude collapses to 0).
      const y = reduced ? mid : mid + noise.noise2D(x * WAVELENGTH, time) * AMP
      if (x === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.globalAlpha = 1
  }
})
</script>

<style scoped>
.wavy-rule {
  width: 100%;
  /* Fade the ends so the rule dissolves into the whitespace rather than
     terminating with hard stops. */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
}
.wavy-rule__canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
