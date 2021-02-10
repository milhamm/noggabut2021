module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat'],
    },

    extend: {
      flex: {
        2: '1 1 50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
