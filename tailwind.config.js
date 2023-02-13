/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        almostWhite: "#FFFDFA",
        lightVermillion: "#F15D51",
      },
      colors: {
        almostWhite: "#FFFDFA",
        gunmetal: "#5E607A",
        darkSpaceBlue: "#00001A",
        yellow: "#E9AA52",
        silver: "#C5C6CE",
        lightVermillion: "#F15D51",
      },
    },
    plugins: [],
  },
};
