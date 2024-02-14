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
      colors:{
        'bg-header' :'#222222',
        'font-gray' :'#C5C5C5'
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideInTop' : 'slide-in-top .5s ease-in-out',
        'slideInLeft': 'slide-in-fwd-left 1s ease-in-out',
        'slideInRight': 'slide-in-fwd-right 1s ease-in-out',
        'textShadow': 'text-shadow-drop-center 1s ease-in-out forwards'
      },
      fontFamily: {
        'poppins' : ['Poppins','Arial'],
        'pacifico': ['Pacifico',' cursive']
      }
      
    },
  },
  plugins: [],
}