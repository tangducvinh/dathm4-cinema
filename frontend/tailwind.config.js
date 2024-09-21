/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        main: '1260px',
        "main-lg": "400px",
      },
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
        "4": "4 4 0%",
        "5": "5 5 0%",
        "6": "6 6 0%",
        "7": "7 7 0%",
      },
      colors: {
        normal: "#4A4A4A",
        main: "#f5811f",
        overlay: "#333333",
        forcus: "#034EA2",
        "bg-overlay": "rgba(0, 0, 0, 0.5)",
        "overlay-main": "rgba(251, 148, 64, .8);",
      },
    },
    
  },
  plugins: [],
}