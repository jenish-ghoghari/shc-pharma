export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2295de',
          lightBlue: "#D2EDFF",
          yellow: "#FFDE59",
          green: "#BEDC98",
        },
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
