/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  
  extend: {
    animation: {
      'spin-slow': 'spin 20s linear infinite',}
    },
};
