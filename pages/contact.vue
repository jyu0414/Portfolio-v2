<template>
  <div>
    <h1>
      {{ $localize('連絡', 'Contact') }}
    </h1>
    <div class="gric-cols-1 grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      <a v-for="(item, key) in contact" :key="key" :href="item.link" target="_blank" rel="noopener noreferrer" class="no-underline">
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
useHead({
  title: navigator.language.slice(0,2) == 'ja' ? '連絡 - 佐々木 雄司' : 'Contact - SASAKI, Yuji',
  htmlAttrs: {
    lang: navigator.language.slice(0,2) == 'ja' ? 'ja' : 'en',
    prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#'
  },
  meta: [
    {
      name: 'description',
      content: navigator.language.slice(0,2) == 'ja' ?
        '佐々木雄司への連絡はEmail(yuji@sasaki.dev)やTwitter(@pochidev001)から可能です．佐々木 雄司（ささき ゆうじ、1999年8月9日-）は，Bridge UI株式会社 社長，慶應義塾大学 政策メディア研究科 修士課程，エンジニア，研究者．専門はHuman-Computer Interaction，ユーザインタフェース，ソフトウェア開発，教育工学．WWDC17 Scholarship，STAT-DASHグランプリ優勝(総務大臣賞)，U22プログラミングコンテスト 商務情報政策局長賞などを受賞．2018年より孫正義育英財団 財団生．現在の研究は，新たな表計算インタフェース，脈波によるストレス測定を用いたUX評価手法，アイコンタクトを用いた家電操作，コンピュータを用いた創造性育成など．人間とコンピュータとのやりとりの最適化を通じて「思い通りに動くコンピュータ」を作り，人間の可能性を拡大することを目指している．また，プログラミングや人工知能に関する講座や，プログラミングや研究の指導も行っている．' : 'Yuji Sasaki can be contacted via Email (yuji@sasaki.dev) and Twitter (@pochidev001). Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.'
    },
    {
      name: 'author',
      content: navigator.language.slice(0,2) == 'ja' ? '佐々木 雄司' : 'SASAKI, Yuji'
    },
    {
      name: 'keywords',
      content:
        '佐々木,雄司,Yuji,Sasaki,関西学院,慶應義塾大学,プログラマ,ソフトウェア,孫正義育英財団,Swift,プログラミング,Human-Computer Interaction,UI,User Interface,UX,教育工学,Kwansei Gakuin, Keio University, Programmer, Software, ユーザインタフェース, Masa-son Foundation, Programming, Creativity, Computational Thinking, 創造性, WWDC, Twitter, Qiita, GitHub, Email, Facebook'
    },
    {
      property: 'og:title',
      content: navigator.language.slice(0,2) == 'ja' ? '連絡 - 佐々木 雄司' : 'Contact - SASAKI, Yuji'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'og:url',
      content: 'https://sasaki.dev/contact'
    }
  ]
})

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
const { $adobeFonts } = useNuxtApp()

onMounted(() => {
  $adobeFonts(document)
})
</script>
