<template>
  <div class="mx-3 max-w-6xl md:mx-8 xl:mx-auto">
    <client-only>
      <header class="mb-8">
        <div class="my-8 text-right">
          <button
            class="transition-colors duration-150"
            :class="{ 'text-secondary': locale !== 'ja' }"
            :aria-pressed="locale === 'ja'"
            @click="changeLanguage('ja')"
          >
            JA
          </button>
          /
          <button
            class="transition-colors duration-150"
            :class="{ 'text-secondary': locale === 'ja' }"
            :aria-pressed="locale === 'en'"
            @click="changeLanguage('en')"
          >
            EN
          </button>
        </div>
        <nuxt-link
          class="block transition-opacity duration-150 hover:opacity-70"
          to="/"
        >
          <signature class="mx-auto my-8 w-32 dark:fill-white" />
        </nuxt-link>
        <nav class="mx-auto flex max-w-2xl flex-row">
          <nuxt-link
            class="nav-link basis-1/4 text-center"
            to="/"
            exact-active-class="nav-link--active"
            >{{ $localize('紹介', 'About') }}</nuxt-link
          >
          <nuxt-link
            class="nav-link basis-1/4 text-center"
            to="/works"
            active-class="nav-link--active"
            >{{ $localize('作品', 'Works') }}</nuxt-link
          >
          <nuxt-link
            class="nav-link basis-1/4 text-center"
            to="/publications"
            active-class="nav-link--active"
            >{{ $localize('出版', 'Publications') }}</nuxt-link
          >
          <nuxt-link
            class="nav-link basis-1/4 text-center"
            to="/contact"
            active-class="nav-link--active"
            >{{ $localize('連絡', 'Contact') }}</nuxt-link
          >
        </nav>
      </header>
      <main>
        <NuxtPage />
      </main>
    </client-only>
    <footer class="my-8 text-center text-sm text-secondary">
      Copyright &copy; Yuji Sasaki 2019-{{ new Date().getFullYear() }}, All
      Rights Reserved.
    </footer>
  </div>
</template>

<style scoped>
.nav-link {
  color: #adafb8;
  text-decoration: none;
  transition: color 150ms ease;
}
.nav-link:hover {
  color: #0c2340;
}
.nav-link--active {
  color: #0c2340;
}
@media (prefers-color-scheme: dark) {
  .nav-link:hover,
  .nav-link--active {
    color: #ffffff;
  }
}
</style>

<script setup lang="ts">
const locale = useLocale()
locale.value = useDefaultLocale().value

const changeLanguage = (language: string) => {
  locale.value = language
}
</script>
