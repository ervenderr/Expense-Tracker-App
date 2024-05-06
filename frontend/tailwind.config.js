/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#14121f',
        'secondary': '#ffffff',
        'tertiary': '#97a7be',

      },
    },
  },
  plugins: [],
}