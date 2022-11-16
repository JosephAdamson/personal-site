/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        successClr: "#77ff6e",
        failClr: "#ff462e"
      }
    },
  },
  plugins: [],
}
