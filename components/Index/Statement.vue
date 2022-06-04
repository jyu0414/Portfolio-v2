<template>
<indent-article>
    <template v-slot:title> {{ locale == "ja-JP" ? statement.title : statement.titleEnglish }}</template>
    <template v-slot:content>
      <span v-html="locale == 'ja-JP' ? statement.message : statement.messageEnglish"></span>
    </template>
  </indent-article>
</template>

<script setup lang="ts">
const statement = await fetchStatement()
const locale = useLocale()
</script>
