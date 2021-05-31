const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        body: 'Rota',
        header: 'Gangster Grotesk',
      },
      colors: {
        blue: colors.lightBlue,
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
        brand: {
          green: '#577557',
          beige: '#FFF7E6',
          brown: '#493B36',
          gray: '#eae6e1',
        },
      },
      backgroundImage: {
        'login-cover':
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/login-cover.jpg')",
        'bag-cover':
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/bag-cover.jpg')",
      },
      keyframes: {
        fadeDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)',
          },
        },
      },
      animation: {
        fadeDown: 'fadeDown 0.3s ease-out',
      },
      transformOrigin: {
        'radix-popover-content': 'var(--radix-popover-content-transform-origin)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
