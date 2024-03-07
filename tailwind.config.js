/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E31C1C",
        secondary: "#32475C",
      },
    },
  },
  plugins: [require("daisyui")],
};