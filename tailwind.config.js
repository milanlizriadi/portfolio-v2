/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "48px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        background: "#e5e3dc",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
