/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Source Sans 3"', 'sans serif'],
      inter: ['inter', 'sans serif'],
      poppins: ['poppins', 'sans serif'],
      cooper : ['CooperLight', 'sans-serif'],
      icooper : ['Cooperitalic', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
    },
    screens: {
      'sm': '480px', 
      'md': '768px', 
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

