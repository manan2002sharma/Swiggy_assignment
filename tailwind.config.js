/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        mdl: '1370px', // Custom breakpoint between md (768px) and lg (1024px)
      },
    },
  },
  plugins: [],
};

