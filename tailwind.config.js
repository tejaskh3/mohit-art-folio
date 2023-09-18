/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightPurple: '#DFCCFB',
        medPurple: '#D0BFFF',
        purple: '#BEADFA',
        darkPurple: '#95389E'
      }
    }
  },
  plugins: []
};
