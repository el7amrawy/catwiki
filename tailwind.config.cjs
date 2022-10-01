/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        mystery: ["'Mystery Quest'", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        hero: 'URL("./src/assets/images/HeroImagelg.png")',
      },
    },
  },
  plugins: [],
};
