module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        ja: ["ten-mincho-text", "serif"]
      }
    },
    textColor: {
      primary: "#0C2340",
      secondary: "#787A80"
    }
  },
  plugins: []
}
