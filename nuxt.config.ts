import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: '佐々木 雄司',
      meta: [],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&display=swap'
        }
      ],
      script: [
        {
          type: "text/javascript",
          src: "//typesquare.com/3/tsst/script/ja/typesquare.js?Soe~liLC5bg%3D&auto_load_font=true&fadein=-1",
          charset: "utf-8"
        }
      ]
    }
  }
})
