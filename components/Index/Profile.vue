<template>
  <indent-article class="md:w-3/4">
    <template v-slot:title>
      <span class="text-accent mr-3">{{$localize("佐々木 雄司", "Sasaki, Yuji")}} </span>
      <span class="text-secondary">{{$localize("Sasaki, Yuji", "佐々木 雄司")}}</span>
    </template>
    <template v-slot:content>
      <section
        v-for="(item, index) in profileContents"
        :key="index"
        class="my-6"
      >
        <h2 v-if="item.isTitleNeeded">
          {{ $localize(item.title, item.titleEnglish) }}
        </h2>
        <span
          v-html="$localize(item.content, item.contentEnglish)"
        ></span>
      </section>
    </template>
  </indent-article>
</template>

<script setup lang="ts">
const { items: profileContents } = await fetchProfile()
</script>
