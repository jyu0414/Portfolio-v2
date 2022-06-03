module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Kyoukasho ICA Medium", "sans-serif"]
      }
    },
  },
  plugins: []
}
