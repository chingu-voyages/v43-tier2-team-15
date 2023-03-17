/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "safflower-red": "#D63447",
        bonfire: "#F57B51",
        "birch-white": "#F6EEDF",
        "foggy-gray": "#D1CEBD",
      },
    },
  },
  plugins: [],
};
