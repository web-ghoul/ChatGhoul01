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
        primary_gradient: "linear-gradient(135deg, #000 0%, #111 100%)",
        primary_gradient_reverse: "linear-gradient(135deg, #111 0%, #000 100%)",
      }
    },
  },
  plugins: [],
};
