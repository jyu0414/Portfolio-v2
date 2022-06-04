<template>
  <div class="md:flex" itemscope itemtype="http://schema.org/Person">
    <index-profile />
    <div class="w-full md:w-1/4">
      <img
        class="md:mt-[160px]"
        :src="topImage.profileimage.src"
        itemprop="image"
        alt=""
      />
    </div>
  </div>
  <index-statement />
  <index-biography />
  <index-career />
  <index-activity />
</template>

<script setup lang="ts">
const topImage = await fetchTopImage()
const { $adobeFonts } = useNuxtApp()

onMounted(() => {
  $adobeFonts(document)
})
</script>
