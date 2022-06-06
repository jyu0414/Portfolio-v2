import { defineNuxtConfig } from 'nuxt'
import { m } from './dist/_nuxt/entry-d68a81e7.mjs'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-jsonld'],
  ssr: false,
  css: [
    '@/assets/styles/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@nuxtjs/google-analytics'
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  app: {
    head: {
      title: 'SASAKI, Yuji',
      meta: [
        {
          name: 'description',
          content:
            '佐々木 雄司（ささき ゆうじ、1999年8月9日-）は，Bridge UI株式会社 社長，慶應義塾大学 政策メディア研究科 修士課程，エンジニア，研究者．専門はHuman-Computer Interaction，ユーザインタフェース，ソフトウェア開発，教育工学．WWDC17 Scholarship，STAT-DASHグランプリ優勝(総務大臣賞)，U22プログラミングコンテスト 商務情報政策局長賞などを受賞．2018年より孫正義育英財団 財団生．現在の研究は，新たな表計算インタフェース，脈波によるストレス測定を用いたUX評価手法，アイコンタクトを用いた家電操作，コンピュータを用いた創造性育成など．人間とコンピュータとのやりとりの最適化を通じて「思い通りに動くコンピュータ」を作り，人間の可能性を拡大することを目指している．また，プログラミングや人工知能に関する講座や，プログラミングや研究の指導も行っている．Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.'
        },
        {
          name: 'author',
          content: '佐々木 雄司'
        },
        {
          name: 'keywords',
          content: '佐々木,雄司,Yuji,Sasaki,関西学院,慶應義塾大学,プログラマ,ソフトウェア,孫正義育英財団,Swift,プログラミング,Human-Computer Interaction,UI,User Interface,UX,教育工学'
        },
        {
          property: 'og:site_name',
          content: 'SASAKI, Yuji'
        },
        {
          property: 'og:description',
          content: 'Official Website of SASAKI, Yuji'
        },
        {
          property: 'og:locale:alternate',
          content: 'ja_JP'
        },
        {
          property: 'og:locale:alternate',
          content: 'en-US'
        },
        {
          property: 'og:locale:alternate',
          content: 'en-GB'
        },
        {
          property: 'og:image',
          content: 'https://sasaki.dev/ogp.png'
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          property: 'twitter:creator',
          content: '@YujiSasaki89'
        }
      ],
      link: [
        {
          rel: 'alternate',
          href: 'https:://sasaki.dev/',
          hreflang: 'en'
        },
        {
          rel: 'alternate',
          href: 'https:://sasaki.dev/',
          hreflang: 'ja'
        },
        {
          rel: 'alternate',
          href: 'https:://sasaki.dev/',
          hreflang: 'x-default'
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        },
        {
          rel: 'icon alternate',
          type: 'image/png',
          href: '/favicon.png'
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          href: '/apple-touch-icon-180x180.png'
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg'
        },
        {
          rel: 'manifest',
          href: '/manifest.json'
        },
      ]
    }
  },
  googleAnalytics: {
    id: 'UA-134958679-2'
  }
})
