/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      slate: {
        300: "#D5E1EF",
        500: "#68778D",
        900: "#1F314F",
      },
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
