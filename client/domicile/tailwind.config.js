/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"1px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px"
      },
      fontFamily:{
        "poppins":["Poppins", "sans-serif"]
      },
      colors:{
        "blue":"#091A2B"
      }
      
    },
  },
  plugins: [],
}

