/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'strip-purple': '#4a148c',
        'strip-pink': '#e91e63',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

