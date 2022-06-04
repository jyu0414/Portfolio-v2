<template>
<indent-article>
    <template v-slot:title> {{ $localize(statement.title, statement.titleEnglish) }}</template>
    <template v-slot:content>
      <span v-html="$localize(statement.message, statement.messageEnglish)"></span>
    </template>
  </indent-article>
</template>

<script setup lang="ts">
const statement = await fetchStatement()
</script>
