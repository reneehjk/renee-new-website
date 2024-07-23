/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#ECECEC",
        "grey": "#ABAAB8",
        "lightGrey": "#D9D9D9",
        "lightBlue": "#D1D7E5",
        "blue": "#474787",
        "navy": "#2D2C54",
      },
      fontFamily: {
        title: ['Playfair Display', 'serif'],
        body: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}