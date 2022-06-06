<template>
  <div>
    <div class="md:flex" itemscope itemtype="http://schema.org/Person">
      <index-profile />
      <div class="w-full md:w-1/4">
        <img
          class="rounded-lg md:mt-[160px]"
          :src="topImage.profileimage.src"
          itemprop="image"
          alt=""
          width="667"
          height="1000"
        />
      </div>
    </div>
    <index-statement />
    <index-biography />
    <index-career />
    <index-activity />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'SASAKI, Yuji'
})

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Person',
  familyName: 'Sasaki',
  givenName: 'Yuji',
  gender: 'male',
  affiliation: 'Keio University',
  alumniOf: 'Kwansei Gakuin',
  award: 'WWDC17 Scholarship Winner',
  birthDate: '1999/08/09',
  birthPlace: 'Hyogo, Japan',
  callSign: 'JQ3CLP',
  email: 'yuji@sasaki.dev',
  funder: 'Masa-son Foundation',
  honorificPrefix: 'Mr.',
  jobTitle: 'Engineer',
  worksFor: 'Bridge UI, Inc.'
})

const topImage = await fetchTopImage()
const { $adobeFonts } = useNuxtApp()

onMounted(() => {
  $adobeFonts(document)
})
</script>
