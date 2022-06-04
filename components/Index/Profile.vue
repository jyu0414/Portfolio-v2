<template>
  <indent-article class="md:w-3/4">
    <template v-slot:title>
      <span class="text-accent">佐々木 雄司</span>
      <span class="text-secondary">Sasaki, Yuji</span>
    </template>
    <template v-slot:content>
      <section
        v-for="(item, index) in profileContents"
        :key="index"
        class="my-6"
      >
        <h2 v-if="item.isTitleNeeded">
          {{ locale == 'ja-JP' ? item.title : item.titleEnglish }}
        </h2>
        <span
          v-html="locale == 'ja-JP' ? item.content : item.contentEnglish"
        ></span>
      </section>
    </template>
  </indent-article>
</template>

<script setup lang="ts">
const { items: profileContents } = await fetchProfile()
const locale = useLocale()
</script>
