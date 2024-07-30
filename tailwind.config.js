/** @type {import('tailwindcss').Config} */
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
        
      }
    },
  },
  plugins: [],
}

