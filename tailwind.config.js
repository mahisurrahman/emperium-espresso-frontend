/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'rancho-font': ["'Rancho', cursive"],
      'raleway-font': ["'Raleway', sans-serif"],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["coffee"],
  },
}

