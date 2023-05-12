/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue":"#1f2631",
        "grey-1":"#313a49",
        "green-1":"#58fcae",
        "white-1":"#ccdfe6"
      }
    },
  },
  plugins: [],
}

