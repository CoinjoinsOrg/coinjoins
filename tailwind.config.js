/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "green-cj": "#00FF19",
    },
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
