/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        treeGreen: "#38C68B",
        treeDarkGreen: "#222A2B",
        treeCyan: "#109DA0",
        treeGray: "#E8EAED",
        treeDarkGray: "#D9D9D9",
        treeDarkGrayAlt: "#cccccc",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
