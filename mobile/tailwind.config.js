/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}",
    "./screens/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0092E4FF",
        primary_bg: "#000000",
      },
      fontFamily: {
        ubuntu_light: "Ubuntu-Light",
        ubuntu_regular: "Ubuntu-Regular",
        ubuntu_medium: "Ubuntu-Medium",
        ubuntu_bold: "Ubuntu-Bold",
      },
    },
  },
  plugins: [],
};
