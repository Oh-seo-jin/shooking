/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM"', "sans-serif"],
        jua: ['Jua', "sans-serif"]
      },
    },
  },
  plugins: [],
}

