module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './public/*.html'
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
    screens: {
      'xs': '400px',
      // => @media (min-width: 400px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}