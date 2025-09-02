
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Inter','sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(126, 34, 206, 0.35)',
      },
      backgroundImage: {
        'grid': 'radial-gradient(#2a2f4a 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
