/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cb_green: "#91B849",
        cb_blue: "#223347",
        cb_darkblue: "#172331",
        cb_white: "#E1E1E1",
        cb_primary: "orange",
      },
      backgroundImage: {
        rezepteHero: "url('/images/food.jpg')",
      },
    },
  },
  plugins: [],
};
