import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld'
  ],
  ssr: true,
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
      htmlAttrs: {
        prefix:
          'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#'
      },
      title: 'SASAKI, Yuji',
      meta: [
        {
          name: 'theme-color',
          content: '#ffffff'
        },
        {
          hid: 'og:locale:alternate',
          property: 'og:locale:alternate',
          content: 'ja_JP'
        },
        {
          hid: 'og:locale:alternate',
          property: 'og:locale:alternate',
          content: 'en-US'
        },
        {
          hid: 'og:locale:alternate',
          property: 'og:locale:alternate',
          content: 'en-GB'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://sasaki.dev/ogp.png'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator',
          content: '@YujiSasaki89'
        },
        {
          name: 'twitter:image',
          content: 'https://sasaki.dev/ogp.png'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Official Website - SASAKI, Yuji'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://sasaki.dev/'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Portfolio of SASAKI, Yuji'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '佐々木 雄司（ささき ゆうじ、1999年8月9日-）は，Bridge UI株式会社 社長，慶應義塾大学 政策メディア研究科 修士課程，エンジニア，研究者．専門はHuman-Computer Interaction，ユーザインタフェース，ソフトウェア開発，教育工学．WWDC17 Scholarship，STAT-DASHグランプリ優勝(総務大臣賞)，U22プログラミングコンテスト 商務情報政策局長賞などを受賞．2018年より孫正義育英財団 財団生．現在の研究は，新たな表計算インタフェース，脈波によるストレス測定を用いたUX評価手法，アイコンタクトを用いた家電操作，コンピュータを用いた創造性育成など．人間とコンピュータとのやりとりの最適化を通じて「思い通りに動くコンピュータ」を作り，人間の可能性を拡大することを目指している．また，プログラミングや人工知能に関する講座や，プログラミングや研究の指導も行っている．Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            '佐々木 雄司（ささき ゆうじ、1999年8月9日-）は，Bridge UI株式会社 社長，慶應義塾大学 政策メディア研究科 修士課程，エンジニア，研究者．専門はHuman-Computer Interaction，ユーザインタフェース，ソフトウェア開発，教育工学．WWDC17 Scholarship，STAT-DASHグランプリ優勝(総務大臣賞)，U22プログラミングコンテスト 商務情報政策局長賞などを受賞．2018年より孫正義育英財団 財団生．現在の研究は，新たな表計算インタフェース，脈波によるストレス測定を用いたUX評価手法，アイコンタクトを用いた家電操作，コンピュータを用いた創造性育成など．人間とコンピュータとのやりとりの最適化を通じて「思い通りに動くコンピュータ」を作り，人間の可能性を拡大することを目指している．また，プログラミングや人工知能に関する講座や，プログラミングや研究の指導も行っている．Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.'
        },
        {
          name: 'author',
          content: 'SASAKI, Yuji'
        },
        {
          name: 'keywords',
          content:
            '佐々木,雄司,Yuji,Sasaki,関西学院,慶應義塾大学,プログラマ,ソフトウェア,孫正義育英財団,Swift,プログラミング,Human-Computer Interaction,UI,User Interface,UX,教育工学'
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
          href: '/apple-touch-icon-180x180.png',
          sizez: '180x180'
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg'
        },
        {
          rel: 'manifest',
          href: '/manifest.json'
        }
      ]
    }
  }
})
