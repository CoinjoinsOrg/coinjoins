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
    },
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
