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
      },
    },
  },
  plugins: [],
})
