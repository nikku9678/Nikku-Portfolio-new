/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnColor: '#202124', // This is a bright green. You can replace it with any hex code you prefer.
      },
    },
  },
  plugins: [],
}