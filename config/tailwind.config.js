const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B21B6', // Example Primary Color (Purple)
        secondary: '#34D399', // Example Secondary Color (Teal)
        background: '#F9FAFB',
        textPrimary: '#111827',
        textSecondary: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
/** @type {import('tailwindcss').Config} */
