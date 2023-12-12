/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      'blue': {
        '50': '#f0f7ff',
        '100': '#e0eefe',
        '200': '#badefd',
        '300': '#7dc4fc',
        '400': '#38a6f8',
        '500': '#0e8be9',
        '600': '#026cc7',
        '700': '#0357a3',
        '800': '#074a85',
        '900': '#0c3e6e',
        '950': '#082749',
      },
      'gray': {
        '50': '#f4f6f9',
        '100': '#eceff3',
        '200': '#dce1e9',
        '300': '#c6cedb',
        '400': '#aeb8cb',
        '500': '#99a2bb',
        '600': '#7c84a5',
        '700': '#6f7593',
        '800': '#5b6078',
        '900': '#4d5162',
        '950': '#2d2f39',
      },
      'white': '#FFFFFF',
      'default': '#041C31',
    },
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

