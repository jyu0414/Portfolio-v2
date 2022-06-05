<template>
  <a
    v-if="link"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="underline decoration-secondary"
    ><cite>{{ label }}</cite></a
  >
  <cite v-else>{{ label }}</cite>
</template>

<script setup lang="ts">
interface Props {
  link: string
  label: string
}

const props = withDefaults(defineProps<Props>(), {
  link: '',
  label: ''
})
</script>
