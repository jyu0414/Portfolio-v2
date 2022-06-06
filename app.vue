<template>
  <div class="mx-3 md:mx-8 xl:mx-auto max-w-6xl">
    <header class="mb-8">
      <div class="my-8 text-right">
        <button :class="{'text-secondary': locale !== 'ja'}" @click="changeLanguage('ja')">JA</button> /
        <button :class="{'text-secondary': locale === 'ja'}" @click="changeLanguage('en')">EN</button>
      </div>
      <nuxt-link to="/">
        <signature class="mx-auto my-8 w-32 dark:fill-white" />
      </nuxt-link>
      <nav class="mx-auto flex max-w-2xl flex-row">
        <nuxt-link  class="basis-1/4 text-center no-underline" to="/">{{
          $localize('紹介', 'About')
        }}</nuxt-link >
        <nuxt-link  class="basis-1/4 text-center no-underline" to="/works">{{
          $localize('作品', 'Works')
        }}</nuxt-link >
        <nuxt-link  class="basis-1/4 text-center no-underline" to="/publications">{{
          $localize('出版', 'Publications')
        }}</nuxt-link >
        <nuxt-link  class="basis-1/4 text-center no-underline" to="/contact">{{
          $localize('連絡', 'Contact')
        }}</nuxt-link >
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="my-8">
      Copyright &copy; Yuji Sasaki 2019-2022, All Rights Reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
const locale = useLocale()

const changeLanguage = (language: string) => {
  locale.value = language
}



</script>
