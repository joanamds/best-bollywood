/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '30rem'
      },
      fontFamily: {
        'custom': ['SF Hollywood Hills Extended', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
