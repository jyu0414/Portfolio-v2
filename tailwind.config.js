module.exports = {
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        ja: ["ten-mincho-text", "serif"]
      }
    },
    colors: {
      primary: "#0C2340",
      secondary: "#595959",
      accent: "#B0463C",
      white: "#FFFFFF",
      black: "#000000"
    },
    textColor: {
      primary: "#0C2340",
      secondary: "#ADAFB8",
      accent: "#B0463C",
      white: "#FFFFFF",
      black: "#000000"
    }
  },
  plugins: [],
  darkMode: 'media'
}
