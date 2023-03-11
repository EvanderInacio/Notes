/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          900: '#232129',
          800: '#312E38',
          700: '#3E3B47'
        },
        gray: {
          100: '#999591',
          300: '#666360',
        },
        white: {
          800: '#F4EDE8'
        },
        orange: {
          800: '#FF9000'
        },
        red: {
          900: '#FF002E'
        }
      }
    }
  },
  plugins: []
}
