/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        customPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        customPulse: 'customPulse 3s infinite', 
      },
      rotate: {
        '90': '90deg',
        '180': '180deg',
        '270': '270deg',
      },
      colors: {
        primary: "#ad241b",
        secondary: "#161616",
        third: "#202020",
        tertiary: "#e3e3e3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        interTight: ['Inter Tight', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "853px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tailwindcss-no-scrollbar')
  ],
};
