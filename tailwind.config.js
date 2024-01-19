/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'console': ['Lucida Console', 'Courier New', 'monospace'],
    },
    extend: {
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      animation: {
        'pulse': 'pulse 7s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}
