/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      tela: {
        Bia: "2560x1080"
      },
      colors: {
        rosalogin: "#fd98b4 ",
        buttonlogin: "#f3adce",
      },
    },
  },
  plugins: [],
};