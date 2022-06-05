<template>
  <div>
    <publications-papers/>
    <publications-patents/>
    <publications-lectures/>
    <publications-publishes/>
    <publications-media/>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Publications - SASAKI, Yuji'
})

const { $adobeFonts } = useNuxtApp()

onMounted(() => {
  $adobeFonts(document)
})
</script>
