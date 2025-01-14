/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#fff",
        "primary-color": "#7d7d7d",
        "primary-color-light": "#7d7d7d18",
        "cl-black": "#000",
        "cl-white": "#fff",
        "cl-yellow-light": "hsl(127, 100%, 65%)",
        "cl-yellow-dark": "hsl(127, 95%, 15%)",
        "cl-grey-light": "#f4efefbc",
      },
      fontSize: {
        "small": "0.9rem",
      }
    },
  },
  plugins: [],
}