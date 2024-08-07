/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , './custom.css'],
  theme: {
 
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      'tahiti':{
       100: '#1C646D',
       200: '#381840',
       300: '#A0CD60',
       400: '#ffffff',
      
      },

      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '10rem',
          lg: '16rem',
          xl: '20rem',
          '2xl': '12rem',
        },
      },
    },
    fontFamily: {
        'Josefin Sans' : [ 'Josefin Sans', 'sans-serif' ],
      },
  


  
  },
  plugins: [],
}

