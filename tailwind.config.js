/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FBF8F1',
          100: '#F7F2E8',
          200: '#EFE7D5',
          300: '#E5D9C2',
        },
        sage: {
          50: '#F3F5EE',
          100: '#E3E8D5',
          200: '#C7D1B0',
          300: '#A8B68A',
          400: '#8B9C6B',
          500: '#6E8052',
          600: '#566641',
          700: '#445234',
          800: '#333E27',
        },
        moss: {
          100: '#DCE3CE',
          200: '#B8C49E',
          300: '#94A671',
          400: '#7A8C59',
          500: '#617044',
          600: '#4C5836',
          700: '#3A4428',
        },
        beige: {
          50: '#FAF6EF',
          100: '#F0E9DC',
          200: '#E5DBC9',
          300: '#D5C7AE',
        },
        clay: {
          300: '#C4A884',
          400: '#B0926A',
          500: '#967A52',
        },
      },
      fontFamily: {
        serif: ['Nanum Myeongjo', 'Georgia', 'serif'],
        body: ['"Noto Sans KR"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'sway-slow': 'sway 6s ease-in-out infinite',
        'sway-slower': 'sway 9s ease-in-out infinite',
        'breathe': 'breathe 7s ease-in-out infinite',
        'float-dust': 'floatDust 12s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'plant-wiggle': 'plantWiggle 0.5s ease-in-out',
      },
      keyframes: {
        plantWiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-5deg)' },
          '40%': { transform: 'rotate(4deg)' },
          '60%': { transform: 'rotate(-3deg)' },
          '80%': { transform: 'rotate(2deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.03)', opacity: '1' },
        },
        floatDust: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '20%': { opacity: '0.6' },
          '80%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-40px) translateX(15px)', opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
