/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          hyphen: "#E16626",
        },
        lime: {
          hyphen: "#AFD137",
        },
      },
      fontFamily: {
        sans: ["'Segoe UI'", "'Helvetica Neue'", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
