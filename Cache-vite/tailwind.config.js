/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Enable dark mode using class
  theme: {
    extend: {
      keyframes: {
        fadeInScale: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        fadeInScale: 'fadeInScale 0.5s ease-in-out',
      },
      colors: {
        'off-white': '#e0e0e0',
        'dark-text': '#f3f4f6',
      },
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'],
        lato: ['Lato', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
