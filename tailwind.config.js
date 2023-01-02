/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#1FAED0',
      secondary: '#FAAD3A',
      bg: '#F2FAFF',
      white: '#FFFFFF',
      dark: '#333333',
      rose: '#b91c1c',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        courgette: ['Courgette'],
      },
    },
  },
  plugins: [],
};
