/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl':32
    },

    colors: {
      'gray-900':'#121214',
      'gray-800':'#202024',
      'gray-400':'#76767A',
      'gray-100':'#E1E1E6',
      'gray-200':'#C4C4CC',

      'cyan-500':'#81d8f7',
      'gray-300':'#9be1f8',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
