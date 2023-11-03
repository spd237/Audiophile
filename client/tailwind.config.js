/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#D87D4A',
        'orange-hover': '#FBAF85',
        'almost-black': '#101010',
        'zx9-hover': '#4C4C4C',
        'light-gray': '#F1F1F1',
        'almost-white': '#FAFAFA',
        'light-orange': '#FBAF85',
        'input-border-color': '#CFCFCF',
        'dark-gray': '#191919',
      },
      fontFamily: {
        manrope: 'Manrope',
      },
      backgroundImage: {
        'hero-mobile': "url('src/assets/image-hero-mobile.jpg')",
        'hero-tablet': "url('src/assets/image-hero-tablet.jpg')",
        'hero-desktop': "url('src/assets/image-hero-desktop.jpg')",
        zx7preview: "url('src/assets/image-speaker-zx7-home-mobile.jpg')",
        zx7previewTablet: "url('src/assets/image-speaker-zx7-home-tablet.jpg')",
        zx7previewDesktop:
          "url('src/assets/image-speaker-zx7-home-desktop.jpg')",
        'pattern-circles': "url('src/assets/pattern-circles.svg')",
      },
    },
  },
  plugins: [],
};
