/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        WhiteComp: "#E5E9E7",
        BrownComp: "#31111D",
        GreenComp: "#C9CBA3",
      },

      backgroundImage: {
        backgroundpc1: "url('./static/images/backgroundpc1.jpg')",
        backgroundpc2: "url('./static/images/backgroundpc2.jpg')",
        backgroundpc3: "url('./static/images/backgroundpc3.jpg')",
        backgroundpc4: "url('./static/images/backgroundpc4.jpg')",
      },
    },
  },
  plugins: [],
};
