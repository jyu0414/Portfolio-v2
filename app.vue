<template>
  <div class="container mx-auto max-w-6xl font-body">
    <header class="mb-8">
      <div class="my-8 text-right">
        <button @click="changeLanguage('ja-JP')">JA</button> / <button @click="changeLanguage('en-US')">EN</button>
      </div>
      <a href="/">
        <img class="mx-auto my-8 w-32" src="signature.jpeg" alt="" width="256" />
      </a>
      <nav class="mx-auto flex max-w-2xl flex-row">
        <a class="basis-1/4 text-center" href="/">{{locale == "ja-JP" ? "紹介": "About"}}</a>
        <a class="basis-1/4 text-center" href="/">{{locale == "ja-JP" ? "作品": "Works"}}</a>
        <a class="basis-1/4 text-center" href="/">{{locale == "ja-JP" ? "出版": "Publications"}}</a>
        <a class="basis-1/4 text-center" href="/">{{locale == "ja-JP" ? "連絡": "Contact"}}</a>
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
  console.log("hello")
  locale.value = language
  console.log({locale})
}
</script>
