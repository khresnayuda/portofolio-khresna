module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#000000',
        navy: {
          950: '#030b1f',
          900: '#061438',
          800: '#0a1f55',
          700: '#0f2d7a',
          500: '#2f6bff',
          300: '#8fb0ff',
        },
      },
    },
  },
  plugins: [],
}
