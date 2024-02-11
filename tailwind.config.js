/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: 'rgb(255, 80, 80)',
        'gray-opacity': 'rgb(160, 160, 160, 0.15)',
      },
      animation: {
        bounceIn: 'bounceIn 0.6s ease forwards',
      },
      keyframes: {
        bounceIn: {
          '100%': { transform: 'translate(0%, 0%)', opacity: 1 },
        },
        jump: {
          '0%': { height: '5px' },
          '25%': { height: '20px' },
          '50%': { height: '10px' },
          '75%': { height: '20px' },
          '100%': { height: '5px' },
        },
        scale: {
          '0%': { height: '10px' },
          '50%': { height: '40px' },
          '100%': { height: '10px' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
