/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9ed',
          100: '#f8edcc',
          200: '#f0d999',
          300: '#e6bf5f',
          400: '#d9a82e',
          500: '#c9941a',
          600: '#a87612',
          700: '#8a5e11',
          800: '#714a15',
          900: '#603e16',
        },
        turquoise: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        coffee: {
          50: '#faf5f0',
          100: '#f0e6d6',
          200: '#e2ccad',
          300: '#d2ac7e',
          400: '#c39158',
          500: '#b87a3e',
          600: '#a86332',
          700: '#8c4d2a',
          800: '#744028',
          900: '#5e3523',
        },
        bordeaux: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d2d2',
          300: '#f4adad',
          400: '#ec7a7a',
          500: '#e05353',
          600: '#cc3333',
          700: '#a82525',
          800: '#8b2222',
          900: '#742323',
          950: '#3e0e0e',
        },
        dark: {
          900: '#0f0a05',
          800: '#1a1209',
          700: '#2a1f12',
          600: '#3d2e1a',
        }
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
