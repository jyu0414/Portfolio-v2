<template>
  <div class="gen-field" aria-hidden="true">
    <canvas ref="canvas" class="gen-field__canvas" />
  </div>
</template>

<script setup lang="ts">
/*
 * GenerativeField — Tier 2 面的な線群 (DESIGN.md §3.5「流線」).
 * A drift of thin streamlines traced through a slowly evolving simplex vector
 * field — 墨流し / the trace of wind. Sits in the whitespace band between the
 * hero and the statement (never behind body text, §3.5「本文の可読性が常に優先」).
 *
 * Discipline (§3.5「動きの規律」):
 *   - the field's 3rd (time) axis advances ~0.03 units/s (timeScale) → visible
 *     change over ~30s, well past the ≥20s「呼吸」threshold; no periodic loop
 *   - 1px lines; density carried by count (28) with low alpha 0.12, so no single
 *     line asserts itself — a background 気配, not a focal mark
 *   - seeded → the reduced-motion still is a chosen, balanced composition
 *   - box height is fixed → zero CLS; edges fade via CSS mask into the margin
 */
import { ref } from 'vue'
import { createRng } from '~/composables/generative/noise'

const props = withDefaults(
  defineProps<{
    seed?: number
    density?: number
  }>(),
  { seed: 42, density: 28 }
)

const canvas = ref<HTMLCanvasElement | null>(null)

const STEP = 7 // px per integration step
const STEPS = 32 // points per streamline
const FIELD_SCALE = 0.0016 // spatial noise scale (larger = tighter swirls)

// Normalised (resolution-independent) seed points, computed once.
const seeds: { nx: number; ny: number }[] = []
{
  const rng = createRng(props.seed)
  for (let i = 0; i < props.density; i++) {
    seeds.push({ nx: rng(), ny: rng() })
  }
}

useGenerativeLines(canvas, {
  seed: props.seed,
  density: props.density,
  timeScale: 0.03, // field time axis: ~0.03 units/s → change over ~30s
  fps: 30,
  staticTime: 24,
  render({ ctx, width, height, time, color, noise }) {
    ctx.lineWidth = 1
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = color
    ctx.globalAlpha = 0.12
    for (let i = 0; i < seeds.length; i++) {
      let x = seeds[i].nx * width
      let y = seeds[i].ny * height
      ctx.beginPath()
      ctx.moveTo(x, y)
      for (let s = 0; s < STEPS; s++) {
        const angle =
          noise.noise3D(x * FIELD_SCALE, y * FIELD_SCALE, time) * Math.PI * 2
        x += Math.cos(angle) * STEP
        y += Math.sin(angle) * STEP
        ctx.lineTo(x, y)
      }
      ctx.stroke()
    }
    ctx.globalAlpha = 1
  }
})
</script>

<style scoped>
.gen-field {
  width: 100%;
  height: 120px;
  /* Fade all four edges so the line group melts into the surrounding
     whitespace and never reads as a hard-edged panel. */
  -webkit-mask-image: radial-gradient(
    120% 90% at 50% 50%,
    #000 45%,
    transparent 100%
  );
  mask-image: radial-gradient(120% 90% at 50% 50%, #000 45%, transparent 100%);
}
@media (min-width: 768px) {
  .gen-field {
    height: 160px;
  }
}
.gen-field__canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
