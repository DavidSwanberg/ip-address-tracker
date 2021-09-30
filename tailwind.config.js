module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
       'hero-pattern': "url('/pattern-bg.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
