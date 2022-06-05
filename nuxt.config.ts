import { defineNuxtConfig } from 'nuxt'
import { m } from './dist/_nuxt/entry-d68a81e7.mjs'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
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
            '佐々木雄司は慶應義塾大学に通いながらBridge UI株式会社を経営しており，ユーザインタフェースを中心としてソフトウェアの研究・開発に取り組んでいる。小学生の頃より様々なソフトウェアの開発を行い、高校時代には数理科学部というクラブ活動の一環で各種コンテスト等に出場した。STAT-DASHグランプリ2016で初学者向け統計情報ポータルサイトe-Stat Juniorを提案し総務大臣賞を受賞、WWDC17にScholarshipで招待などの実績や現在行っている研究などが評価され2018年より孫正義育英財団準財団生（2019年より正財団生）に選出。Yuji Sasaki runs Bridge UI Corporation while attending Keio University and is involved in software research and development with a focus on user interfaces. He has been developing various software since he was a primary school student, and participated in various contests in his high school years as part of the Mathematical Science Club, etc. He received the Minister of Internal Affairs and Communications Award for his proposal of e-Stat Junior, a statistical information portal site for beginners, at the STAT-DASH Grand Prix 2016 and was invited to WWDC17 as a In 2018, he was selected as an associate foundation student of the Sun Yat-sen Scholarship Foundation (from 2019, a regular foundation student) in recognition of his achievements and current research, such as being invited to Scholarship.'
        },
        {
          name: 'author',
          content: '佐々木 雄司'
        },
        {
          name: 'keywords',
          content: '佐々木,雄司,Yuji,Sasaki,関西学院,慶應義塾大学,プログラマ,ソフトウェア,孫正義育英財団,Swift,プログラミング,Human-Computer Interaction,UI,User Interface,UX,教育工学'
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
        }
      ]
    }
  },
  googleAnalytics: {
    id: 'UA-134958679-2'
  }
})
