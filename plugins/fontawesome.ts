import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faQ, faCircleCheck, faQuoteRight, faLink, faGraduationCap, faCrown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineNuxtPlugin((nuxtApp) => {
// This is important, we are going to let Nuxt.js worry about the CSS
  config.autoAddCss = false
// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
  library.add([faEnvelope, faQ, faTwitter, faGithub, faLinkedin, faFacebook, faCircleCheck, faQuoteRight, faLink, faGraduationCap, faCrown])
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})