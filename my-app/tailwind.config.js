/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'poppins':'Poppins',
    },
    colors:{
      'bright-blue':'#5E83F2',
      'light-gray':'#F2F2F2',
      'light-blue':'#ddeaef',
      'transparent':'transparent',
      'white':'white',
      'black':'#333',
      'red':'#F25E5E',
      'green':'#5EF287'
    },
    backgroundImage:{
      'doctor-mobile': "url('./images/doctorbackground-mobile.png')",
      'doctor-desktop':"url('./images/doctor-desktop.png')",
    },
    extend: {
      boxShadow:{
        'card-shadow': '4px 4px 25px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}