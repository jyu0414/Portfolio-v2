<template>
  <div>
    <h1>
      {{ $localize('連絡', 'Contact') }}
    </h1>
    <div class="gric-cols-1 grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <a v-for="(item, key) in contact" :key="key" :href="item.link" target="_blank" rel="noopener noreferrer">
        <div class="relative aspect-[1.618/1] border border-primary dark:border-white p-4">
          <span class="text-xl">{{ item.title }}</span>
          <address class="text-sm">{{ item.linkDisplay }}</address>
          <font-awesome-icon :icon="[item.iconCategory, item.icon]" size="2x" class="absolute bottom-8 right-8" />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const contact = [
  {
    title: 'Email',
    link: 'mailto:yuji@sasaki.dev',
    linkDisplay: 'yuji@sasaki.dev',
    iconCategory: 'fas',
    icon: 'envelope'
  },
  {
    title: 'Twitter',
    link: '//twitter.com/pochidev001',
    linkDisplay: '@pochidev001',
    iconCategory: 'fab',
    icon: 'twitter'
  },
  {
    title: 'Facebook',
    link: '//www.facebook.com/ys8921',
    linkDisplay: 'ys8921',
    iconCategory: 'fab',
    icon: 'facebook'
  },
  {
    title: 'GitHub',
    link: '//github.com/jyu0414/',
    linkDisplay: 'jyu0414',
    iconCategory: 'fab',
    icon: 'github'
  },
  {
    title: 'Qiita',
    link: '//qiita.com/jyu0414',
    linkDisplay: 'jyu0414',
    iconCategory: 'fas',
    icon: 'q'
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/yujisasaki/',
    linkDisplay: 'yujisasaki',
    iconCategory: 'fab',
    icon: 'linkedin'
  }
]
</script>
