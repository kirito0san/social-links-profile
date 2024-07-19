/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      colors: {
        green: {
          DEFAULT: 'hsl(75, 94%, 57%)',
        },
        white: 'hsl(0, 0%, 100%)',
        gray: {
          700: 'hsl(0, 0%, 20%)',
          800: 'hsl(0, 0%, 12%)',
          900: 'hsl(0, 0%, 8%)',
        },
      },
    },
  },
  plugins: [],
}