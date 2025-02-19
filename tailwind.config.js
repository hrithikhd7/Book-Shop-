/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { primary: ["Work Sans"], secondary: ["Playfair Display"] },
    },
  },
  plugins: [require("daisyui")],
};
