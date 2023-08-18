/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '10rem'
    },
    extend: {
      colors: {
        grey100: '#F2F2F2',
        grey200: '#D9D9D9',
        grey300: '#808080',
        grey400: '#333333',
        grey500: '#262626',
        grey600: '#1A1A1A',
        grey700: '#0D0D0D',
        blue: '#4EA8DE',
        blueDark: '#1E6F9F',
        purple: '#8284FA'
      },
    },
  },
  plugins: [],
}

