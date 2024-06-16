/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'tahiti':{
       100: '#1C646D',
       200: '#381840',
       300: '#A0CD60',
       400: '#fff',
      },
    },
    fontFamily: {
        'Josefin Sans' : [ 'Josefin Sans', 'sans-serif' ],
      },

  
  },
  plugins: [],
}

