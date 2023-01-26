/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '0.5rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

  },

  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ['autumn'],
    base: false,
    utils: true,
    logs: true,
    rtl: false,
  },
};
