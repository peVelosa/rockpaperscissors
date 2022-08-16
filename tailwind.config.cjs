/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'dark': 'hsl(229, 25%, 31%)',
        'score': 'hsl(229, 64%, 46%)',
        'outline': 'hsl(217, 16%, 45%)'
      },
      fontWeight: {
        '600': '600',
        '700': '700'
      },
      maxWidth: {
        'desktop': '1440px',
        'large-mobile': '600px'
      },
      screens: {
        'desktop': '1440px',
        'laptop': '1024px',
        'tablet': '768px',
        'large-mobile': '600px'
      }
    },
  },
  plugins: [],
};