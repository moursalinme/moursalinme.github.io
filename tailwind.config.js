/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      fontFamily: {
        // source_sans: ['Source Sans 3', 'sans-serif']
      },
      height: {
        '110': '28rem',
      },
      letterSpacing: {
        'fit': '0.17rem'
      },
      screens: {
        'xs': '480px',
        'md': '820px'
      }
    },
  },
  plugins: [],
}

