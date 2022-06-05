<template>
  <div>
    <h1>
      {{ $localize('作品', 'Works') }}
    </h1>

    <article
      v-for="(item, index) in works.reverse()"
      :key="index"
      class="md:gap-1/12 md:flex my-16"
    >
      <div class="md:8 lg:m-16 md:w-1/2">
        <img :src="item.image[0].src" alt="" />
      </div>

      <div class="mt-3 md:ml-16 md:w-5/12 md:text-right">
        {{ item.beginYear
        }}<span v-if="!item.isCurrent">- {{ item.endYear }}</span>
        <h1 class="text-righ my-0">
          {{ $localize(item.title, item.titleEnglish) }}
        </h1>
        <section
          class="text-left"
          v-html="$localize(item.description, item.descriptionEnglish)"
        ></section>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Works - SASAKI, Yuji'
})

const { items: works } = await fetchWorks()
const { $adobeFonts } = useNuxtApp()

onMounted(() => {
  $adobeFonts(document)
})
</script>
