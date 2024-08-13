/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient_forms': 'linear-gradient(0deg, rgba(251,251,251,1) 0%, rgba(134,134,134,1) 100%, rgba(255,175,62,1) 100%)',
      },
      keyframes: {
        palpitar: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        palpitar: 'palpitar 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}