/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        '30303A': '#30303A',
        '010101': '#010101',
        'C5C5C5': '#C5C5C5',
        'f9f9f9f': '#f9f9f9',
        '#868686': '#868686',
        '#565656': '#565656',
      },
      width: {
        '300': '300px',
        '400': '400px',
        '40': '40vw',
        '35': '35vw',
        '120': '120px',
        '40%': '40%',
        '60%': '60%',
        '200px': '200px',
        '350px': '350px',
        '50%': '50%',
        '30%': '30%',
        '70%':'70%',
        '80%': '80%',
        '50%':'50%',
        '80px': '80px',
        '50px': '50px',
        '60px': '60px'

      },
      height: {
        '200px': '200px',
        '600': '600px',
        '100%': '100%',
        '120px': '120px' ,
        '40px': '40px',
        '60px': '60px'
      }, 
      padding: {
        '20px': '20px'
      }
    },
  },
  plugins: [],
}

