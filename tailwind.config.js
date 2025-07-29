/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
  extend: {
    fontFamily: {
        opensans: ['"Open Sans"', 'sans-serif'],
      },
    colors: {
      primary: {
        light: '#5F090A',   
        dark: '#2C0104',    
      },
      background: {
        light: '#D0BF9B',   
        dark: '#3A0204',    
      },

    },
  },
}
,
  plugins: [],
}
