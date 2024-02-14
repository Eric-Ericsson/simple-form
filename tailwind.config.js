/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F52846',
        'secondary': '#04395E',
        'dark': '#010f18',
      },
    },
  },
  plugins: [],
}