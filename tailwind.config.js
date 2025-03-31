/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004D40', // Deep green for wealth and stability
        secondary: '#00C853', // Vibrant green for growth and prosperity
        background: '#F8F9FA',
      },
      fontFamily: {
        chivo: ['Chivo', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};