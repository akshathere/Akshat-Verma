/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'noto':['Noto Sans', 'sans-serif']
      },
      colors:{
        'black-buck':'#1b1819'
      }
    },
  },
  plugins: [],
}
