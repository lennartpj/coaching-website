/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#171717',
        secondary: '#4a5568',
        accent: '#f05b21',
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace']
      },
      textColor: {
        gray: {
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937'
        }
      }
    },
  },
  plugins: [],
}