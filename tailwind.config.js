/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002060",
        secondary: "#32475C",
        sub: "#E31C1C",
        faq: "#FBE1E1",
        text: "#00353B",
        footer: "#E6E6E6",
      },
    },
  },
  plugins: [require("daisyui")],
};