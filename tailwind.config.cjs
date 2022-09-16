/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["Roboto Slab", ...defaultTheme.fontFamily.serif],
      },

      colors: {
        cb_white: "#E1E1E1",
        cb_black: "#121212",
        cb_primary: "#F1A104",
        cb_secondary: "#25B396",
        cb_accent: "#00743F",
      },
      backgroundImage: {
        rezepteHero: "url('/images/food.jpg')",
      },
    },
  },

  plugins: [],
};
