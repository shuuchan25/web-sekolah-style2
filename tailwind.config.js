/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        lg: "80px",
        md: "30px",
        sm: "12px",
      },
      width: "100%",
    },
    extend: {
      colors: {
        prp: "#AE39FF",
        blu: "#19245F",
        drk: "#2E334E",
        cyn: "#4FACF6",
        yel: "#F2B828",
        mut: "#A3A6A6",
        txt: "#3A3B41",
        lnk: "#404040",
        fot: "#FAFAFA",
      },
      screens: {
        sm: "370px",
        // => @media (min-width: 370px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1080px",
        // => @media (min-width: 991px) { ... }
      },
    },
  },
  plugins: [],
}