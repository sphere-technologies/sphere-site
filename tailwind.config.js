const colors = require("./colors.json")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {
      colors,
      padding: {
        "1hunnid": '100px',
        "2hunnid": '200px',
        "3hunnid": '300px'
      }
    },
  },
  plugins: [],
}

