/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        font: '#0A0406',
        background: '#FFF4FB',
        backgroundSecondary:'#FFC6F3',
        backgroundBlue :'#3977E9',
      }
    },
  },
  plugins: [],
}