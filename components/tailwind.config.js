/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx", // si usás clases directamente en App
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
