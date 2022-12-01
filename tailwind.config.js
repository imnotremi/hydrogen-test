/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'1rem',
    },
    fontFamily: {
      'logo': ['Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      'nav': ['Circular', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}