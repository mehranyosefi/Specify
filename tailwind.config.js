/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "rgb(112, 184, 255)",
        "blue-dark": "rgb(0, 51, 98)",
        "blue-geen": "rgb(76, 204, 230)",
        pink: "rgb(231, 150, 243)",
        "pink-red": "rgb(246, 92, 182)",
        orange: "rgb(255, 160, 87)",
        "orange-light": "rgb(255, 202, 22)",
        green: "rgb(61, 214, 140)",
        "green-dark": "rgb(17, 59, 41)",
        gray: "rgb(32, 36, 37)",
        "gray-light": "rgb(43, 47, 49)",
        "gray-dark": "rgb(21, 23, 24)",
        purple: "rgb(98, 77, 227)",
      },
      fontFamily: {
        Inter: "Inter",
      },
      animation: {
        init: " init linear .2s",
      },
      keyframes: {
        init: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
