/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Sötét mód osztály alapján
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B0DB9C', // világos zöld
          dark: '#181C14',
        },
        secondary: {
          DEFAULT: '#DDF6D2', // világos zöld
          dark: '#697565', // sötét zöld
        },
        background: {
          DEFAULT: '#ECFAE5', // világos háttér
          dark: '#3C3D37', // sötét háttér
        },
        text: {
          DEFAULT: '#18181b', // világos szöveg
          dark: '#B0DB9C', // sötét szöveg
        },
        accent: {
          DEFAULT: '#10b981', // zöld
          dark: '#181C14',
        },
      },
    },
  },
  plugins: [],
}

