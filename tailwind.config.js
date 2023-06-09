/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },
  plugins: [],
};
