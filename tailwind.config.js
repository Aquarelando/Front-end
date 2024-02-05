/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        rosalogin: '#fd98b4 ',
        buttonlogin:'#f3adce',
        navBarColor:'#4199A4',
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
}