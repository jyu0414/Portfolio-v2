export const useLocale = () => useState<string>('locale', () => useDefaultLocale().value)

export const useDefaultLocale = (fallback = 'en-US') => {
  const locale = ref(fallback)
  if (process.server) {
    // Learn more about the nuxtApp interface on https://v3.nuxtjs.org/docs/usage/nuxt-app#nuxtapp-interface-advanced
    const nuxtApp = useNuxtApp()
    const reqLocale = nuxtApp.ssrContext?.req.headers['accept-language']?.split(',')[0]
    if (reqLocale) {
      locale.value = reqLocale.slice(0,2)
    }
  } else if (process.client) {
    const navLang = navigator.language
    if (navLang) {
      locale.value = navLang.slice(0,2)
    }
  }
  
  return locale
}