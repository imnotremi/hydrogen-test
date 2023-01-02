

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
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
  plugins: [
   // require('flowbite/plugin')
  ],
});