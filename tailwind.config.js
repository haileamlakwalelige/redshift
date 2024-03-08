/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E31C1C",
        secondary: "#32475C",
        faq: "#FBE1E1",
        text: "#00353B",
      },
    },
  },
  plugins: [require("daisyui")],
};