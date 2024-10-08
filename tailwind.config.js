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
        primary: "#fafafa",
        dark: "#09090b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
