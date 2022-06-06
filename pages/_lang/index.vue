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
const topImage = await fetchTopImage()
const { $adobeFonts, $localize } = useNuxtApp()
useHead({
  title: $localize('佐々木 雄司', 'SASAKI, Yuji'),
  htmlAttrs: {
    lang: $localize('ja', 'en'),
    prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#'
  },
  meta: [
    {
      name: 'description',
      content: $localize(
        '佐々木 雄司（ささき ゆうじ、1999年8月9日-）は，Bridge UI株式会社 社長，慶應義塾大学 政策メディア研究科 修士課程，エンジニア，研究者．専門はHuman-Computer Interaction，ユーザインタフェース，ソフトウェア開発，教育工学．WWDC17 Scholarship，STAT-DASHグランプリ優勝(総務大臣賞)，U22プログラミングコンテスト 商務情報政策局長賞などを受賞．2018年より孫正義育英財団 財団生．現在の研究は，新たな表計算インタフェース，脈波によるストレス測定を用いたUX評価手法，アイコンタクトを用いた家電操作，コンピュータを用いた創造性育成など．人間とコンピュータとのやりとりの最適化を通じて「思い通りに動くコンピュータ」を作り，人間の可能性を拡大することを目指している．また，プログラミングや人工知能に関する講座や，プログラミングや研究の指導も行っている．', 'Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.')
    },
    {
      name: 'author',
      content: $localize('佐々木 雄司', 'SASAKI, Yuji')
    },
    {
      name: 'keywords',
      content:
        '佐々木,雄司,Yuji,Sasaki,関西学院,慶應義塾大学,プログラマ,ソフトウェア,孫正義育英財団,Swift,プログラミング,Human-Computer Interaction,UI,User Interface,UX,教育工学,Kwansei Gakuin, Keio University, Programmer, Software, ユーザインタフェース, Masa-son Foundation, Programming, Creativity, Computational Thinking, 創造性, WWDC'
    },
    {
      property: 'og:title',
      content: $localize('佐々木 雄司', 'SASAKI, Yuji')
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://sasaki.dev/'
    }
  ]
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



onMounted(() => {
  $adobeFonts(document)
})
</script>
