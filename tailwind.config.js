/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#A729F5",
        gray: {
          dark: "#313E51",
          mid: "#3B4D66",
          light: "#626C7F",
        },
        "blue-light": "#ABC1E1",
        grayish: "#F4F6FA",
        green: "#26D782",
        tomato: "#EE5454",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
}
