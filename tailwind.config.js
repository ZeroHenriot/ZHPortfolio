const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        gold: '#E5B80B',
        darkgold: '#B8860B',
        html: '#e44d26',
        newmain: '#8fd3c8',
        newsec: '#e1d2a6',
      },
      fontSize: {
        '10xl': '9rem',
        '11xl': '20rem',
      },
      lineHeight: {
        11: '8rem',
      },
      maxWidth: {
        99: '500px',
      },
      inset: {
        '1/10': '10%',
        '1/2.2': '45%',
        '1/16': '16%',
      },
    },
    fontFamily: {
      custom: ['"Abril Fatface"', 'serif'],
    },
  },
  plugins: [],
})
