/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'border-b': '#d6d6db',
        'title': '#3b3d41',
        'tprimary': '#646464',
      },
    },
    fontFamily: {
      sans: ['"Source Sans 3"', 'sans serif'],
      inter: ['inter', 'sans serif'],
      poppins: ['poppins', 'sans serif'],
      cooper : ['CooperLight', 'sans-serif'],
      pmac: ['pmac', 'sans-serif'],
      icooper : ['Cooperitalic', 'sans-serif'],
      
      bangla: ['hind-siliguri-regular', 'sans-serif'],
      
      hl_bold: ['Charlieb', 'sans-serif'],
      hl_sbold: ['Charliesb', 'sans-serif'],
      hl_reg: ['CharlieRegular', 'sans-serif'],
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

