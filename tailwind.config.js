/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DMSans-Regular', 'sans-serif'],
        cairo: ['DMSans-Regular', 'sans-serif'],
      },
      colors: {
        footerBgColor: "#4a4a4a",
        grey2: "#efefef",
        grey3: "#454545",
      }
    },
  },
  plugins: [],
}

