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
    colors: {
      primary: "#0C2340",
      secondary: "#595959",
      white: "#FFFFFF",
      black: "#000000"
    },
    textColor: {
      primary: "#0C2340",
      secondary: "#ADAFB8",
      white: "#FFFFFF",
      black: "#000000"
    }
  },
  plugins: [],
  darkMode: 'media'
}
