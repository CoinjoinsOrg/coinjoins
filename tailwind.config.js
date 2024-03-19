/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "green-cj": "#00FF19",
      "dark-blue": "#181B2D",
      white: "#FFFFFF",
      red: "#EA2424",
      "lighter-blue": "#3141A5",
      "inactive-grey": "rgba(107,110,134,0.95)",
      black: "#000000",
      grey: "#ABABAB",
    },
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
