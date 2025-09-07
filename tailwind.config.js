/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Now', 'sans-serif'],
      container: { center: true, padding: '1rem' },
      colors: {
        brand: {
          teal: '#156773',     // primary dari logomu
          accent: '#FFD166',   // kuning CTA
          dark: '#0B1B1E',     // hitam kebiruan
        },
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
    },
  },
  plugins: [],
}
}
