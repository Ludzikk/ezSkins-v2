/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "tileBg": "#1F3535",
        "bodyColor": "#0C1919",
        "navColor": "#112424",
        "btnGreen": "#A6FF35",
      }, 
      boxShadow: {
        tileShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
      }
    },
    fontFamily: {
      "main": ['"Exo 2"', "sans-serif"]
    }
  },
  plugins: [],
}