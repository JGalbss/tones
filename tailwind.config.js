/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      daydream: ['Daydream'],
      inter: ['Inter'],
    },
    colors: {
      green: '#4E9F3D',
      black: '#191A19',
      red: '#C84B31',
      orange: '#F2B134',
    },
  },
  plugins: [],
};
