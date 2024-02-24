/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      'console': ['Lucida Console', 'Courier New', 'monospace'],
    },
    extend: {
      colors: {
        "primary": "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "secondary": "var(--secondary)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      animation: {
        'pulse': 'pulse 7s infinite',
        'semipulse': 'semipulse 7s infinite',
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
        semipulse: {
          '0%, 100%': {
            opacity: 0.5,
          },
          '50%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
