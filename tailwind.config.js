/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-hero': "url('./src/assets/image-hero-desktop.jpg')",
        'mobile-hero': "url('./src/assets/image-hero-mobile.jpg')"
      },
      spacing: {
        100: '42rem',
        73: '19rem',
      },
      color: {
        'fated-white': 'hsla(0, 0%, 30%, 0.4)',
      }
    },
  },
  plugins: [],
}

