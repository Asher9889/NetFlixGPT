/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        netFlixBd: [' "netFlixBd" ','sans-serif'],
        netFlixMd: [' "netFlixMd" ','sans-serif'],
        netFlixRg: [' "netFlixRg" ','sans-serif'],
      },
      backgroundImage: {
        'signInBg': "url('/src/assests/signInBg.jpg')",
        'formBg': "url('/src/assests/formBg.jpg')"
        
      }
    },
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

