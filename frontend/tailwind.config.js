/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , './custom.css'],
  theme: {
 
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'tahiti':{
       100: '#1C646D',
       200: '#381840',
       300: '#A0CD60',
      
      },
    },
    fontFamily: {
        'Josefin Sans' : [ 'Josefin Sans', 'sans-serif' ],
      },
  


  
  },
  plugins: [],
}

