/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      boxShadow: {
        'btn-shadow': '0px 10px 15px rgba(1, 115, 153, 0.2)',
      },

      fontSize: {
        sm: '0.7rem',
        base: '0.875rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
      },
      colors: {
          blue: {
            dark: '#0a72ad',
          },
          gray: {
            dark: '#c4c4c4',
            light: 'e5e5e5',
          },

       black: {
        light: '#242527',
        dark: '#2b2b2b',
        
       },
      },
    },
  },
  plugins: [require("daisyui")],
}
