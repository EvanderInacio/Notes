/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          900: '#1f1d24',
          800: '#27272e',
          750: '#2e2c36',
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
        emerald: {
          900: '#05f086'
        },
        red: {
          900: '#ed0716',
          800: '#f70f1e',
          700: '#FF002E'
        }
      }
    }
  },
  plugins: []
}
