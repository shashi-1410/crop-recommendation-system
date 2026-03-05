/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    backgroundImage: {
      agriculture: "url('https://images.unsplash.com/photo-1607861382212-19c81f33f60a?auto=format&fit=crop&w=1600&q=80')"
    },
  },
},

  plugins: [],
}
