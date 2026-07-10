import { defineNuxtPlugin } from '#app'

/**
 * v-reveal: scroll-linked reveal for list items (Tier 1, DESIGN.md §3.5).
 *
 * On mount, the element starts hidden (opacity 0, translateY 8px) via the
 * `.reveal-item` class in assets/styles/main.css. Once it enters the
 * viewport it gets `.reveal-item--visible`, which triggers a 700ms
 * ease-out transition to its resting state. Fires once per element, then
 * disconnects its observer.
 *
 * prefers-reduced-motion: reduce skips the IntersectionObserver entirely
 * and reveals the element immediately, so nothing depends on scrolling.
 */

const REVEALED_CLASS = 'reveal-item--visible'

interface RevealElement extends HTMLElement {
  __revealObserver__?: IntersectionObserver
}

function observe(el: RevealElement) {
  el.classList.add('reveal-item')

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    el.classList.add(REVEALED_CLASS)
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add(REVEALED_CLASS)
          observer.unobserve(el)
          observer.disconnect()
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  )

  observer.observe(el)
  el.__revealObserver__ = observer
}

function cleanup(el: RevealElement) {
  el.__revealObserver__?.disconnect()
  delete el.__revealObserver__
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: RevealElement) {
      observe(el)
    },
    unmounted(el: RevealElement) {
      cleanup(el)
    }
  })
})
