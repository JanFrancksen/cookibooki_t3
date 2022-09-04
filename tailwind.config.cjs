/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cb_green: '#91B849',
        cb_blue: '#223347',
        cb_darkblue: '#172331',
        cb_white: '#E1E1E1'
      }
    },
  },
  plugins: [],
};
