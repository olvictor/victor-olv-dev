/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom': '0px 0px 3px #5323a1',
      },
      colors:{
        'bg-header' :'#222222',
        'font-gray' :'#C5C5C5',
        'bg-black': '#151312',
        'white-opacity': 'rgba(255, 255, 255, 0.03)',
        'color-white': 'rgb(255, 255, 255)',
        'color-orange':'rgb(244, 108, 56)',
        'color-green':'rgb(197, 255, 65)',
        'color-cinza-1':'rgb(153, 143, 143)',
        'color-cinza-2':'rgb(106, 107, 110);',
        'color-cinza-3':'rgba(182, 180, 189, .2);'
        
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideInTop' : 'slide-in-top .5s ease-in-out',
        'slideInLeft': 'slide-in-fwd-left 1s ease-in-out',
        'slideInRight': 'slide-in-fwd-right 1s ease-in-out',
        'textShadow': 'text-shadow-drop-center 1s ease-in-out forwards',
        'slide-bottom': 'slide-bottom .5s ease-in-out forwards'
      },
      fontFamily: {
        'poppins' : ['Poppins','Arial'],
        'pacifico': ['Pacifico',' cursive']
      }
      
    },
  },
  plugins: [],
}