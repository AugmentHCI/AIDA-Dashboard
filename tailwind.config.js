/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./imports/ui/**/*.{js,jsx,ts,tsx}", "./client/*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", ...defaultTheme.fontFamily.sans],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#F0F6FE",
          100: "#DDEAFC",
          200: "#C4DBFB",
          300: "#9CC5F8",
          400: "#6EA6F3",
          500: "#4A84EE",
          600: "#3267E3",
          700: "#2553D0",
          800: "#2344A9",
          900: "#233C85",
        },
      },
    },
  },
  plugins: [],
};
