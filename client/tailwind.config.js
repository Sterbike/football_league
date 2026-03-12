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
          DEFAULT: '#2563eb', // kék
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#fbbf24', // sárga
          dark: '#b45309',
        },
        background: {
          DEFAULT: '#f9fafb', // világos háttér
          dark: '#18181b', // sötét háttér
        },
        text: {
          DEFAULT: '#18181b', // világos szöveg
          dark: '#f9fafb', // sötét szöveg
        },
        accent: {
          DEFAULT: '#10b981', // zöld
          dark: '#047857',
        },
      },
    },
  },
  plugins: [],
}

