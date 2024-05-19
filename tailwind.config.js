/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        pramary : '#F40404',
        border_b : '#FFB800'
      },
      maxWidth :{
          container : '1140px'
      },
      fontFamily: {
          'poppins': ["Poppins", "sans-serif"],
        },
        backgroundImage: {
          'banner': "url('../image/banner.png')",
          'services1': "url('./image/services1.png')",
          'services2': "url('./image/services2.png')",
          'services3': "url('./image/services3.png')",
          'compnay': "url('./image/compnay.png')",
          'blog1': "url('./image/blog1.png')",
          'blog2': "url('./image/blog2.png')",
          'blog3': "url('./image/blog3.png')",
        }
    },
  },
  plugins: [],
}