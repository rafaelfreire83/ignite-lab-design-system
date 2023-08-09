/** @type {import('tailwindcss').Config} */
export default {
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
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray : {
        900: '#121214',
        800: '#272727',
        400: '#7C7C8A',
      },
      purple: {
        400: '#834BFA',
        300: '#B08AFF',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}

