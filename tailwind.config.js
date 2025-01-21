const colors = require("./colors.json")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {
      colors
    },
  },
  plugins: [],
}

