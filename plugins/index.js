import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      adobeFonts: (d) => {
        var config = {
            kitId: 'idj6pes',
            scriptTimeout: 3000,
            async: true
          },
          h = d.documentElement,
          t = setTimeout(function () {
            h.className =
              h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
          }, config.scriptTimeout),
          tk = d.createElement('script'),
          f = false,
          s = d.getElementsByTagName('script')[0],
          a
        h.className += ' wf-loading'
        tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
        tk.async = true
        tk.onload = tk.onreadystatechange = function () {
          a = this.readyState
          if (f || (a && a != 'complete' && a != 'loaded')) return
          f = true
          clearTimeout(t)
          try {
            Typekit.load(config)
          } catch (e) {}
        }
        s.parentNode.insertBefore(tk, s)
      },
      localizedDate: (dateString) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const date = new Date(dateString)
        const locale = useLocale()
        const month = locale.value == "ja" ? (date.getMonth() + 1) + "月" : months[date.getMonth()]
        const year = locale.value == "ja" ? date.getFullYear() + "年" : date.getFullYear()
        return {
          month,
          year,
          full: locale.value == "ja" ? `${year} ${month}` : `${month} ${year}`
        }
      },
      localize: (ja, en) => {
        return useLocale() == "ja" ? ja : en
      }
    }
  }
})
