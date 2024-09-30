/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        one: "'Sofia Sans Semi Condensed', sans-serif",
        second: "'Island Moments', cursive",
        logo: "'Princess Sofia', cursive",
      },
      fontWeight: {
        logo: "800",
      },
      fontSize: {
        "logo-sm": 30,
        "logo-md": 40,
        "logo-lg": 50,
        "logo-xl": 60,
      },
      colors: {
        one: "#E41F7B",
        two: "#E0669D",
        three: "#EEEEEE",
        "main-dark": "#222831",
        "secondary-dark": "#393e46",
        "black-half": "#00000050",
      },
      animation: {
        incScale: "incScale 2s linear infinite",
        "incScale-high": "incScale-high 2s linear infinite",
      },
      keyframes: {
        incScale: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        "incScale-high": {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      darkMode: ["selector", '[data-mode="dark"]'],
    },
    plugins: [],
  },
};
