module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      fourK: "2560px",
      laptopL: "1440px",
      laptop: "1024px",
      tablet: "768px",
      mobileL: "425px",
      mobileM: "375px",
      mobileS: "320px",
    },
    extend: {
      colors: {
        bgBlack: "#0D1117",
        bgBlackSec: "#0A0D12",
        tWhite: "#E5E9F0",
        tWhiteSec: "#bdc2c9",
        yellow: "#8A6E35",
        tBlue: "#79C0FF",
      },
    },
  },
  plugins: [],
};
