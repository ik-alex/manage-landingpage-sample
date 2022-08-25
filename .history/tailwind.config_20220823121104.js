/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
        Dark Grayish Blue: hsl(227, 12%, 61%)
Very Dark Blue: hsl(233, 12%, 13%)
Very Pale Red: hsl(13, 100%, 96%)
Vary Light Gray: hsl(0, 0%, 98%)
      },
    },
  },
  plugins: [],
};
