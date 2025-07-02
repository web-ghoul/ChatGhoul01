/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0092E4",
        primary_bg: "#000000",
        primary_bg: "",
        white: "#fff",
        black: "#000",
      },
      backgroundImage: {
        hero: 'url("./images/hero.jpg")',
      },
    },
  },
  plugins: [],
};
