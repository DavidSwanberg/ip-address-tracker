module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
       'hero-pattern': "url('/images/pattern-bg.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
