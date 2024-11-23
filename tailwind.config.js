/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      const colors = theme('colors'); // Get all colors from the Tailwind theme
      const root = {}; 

      // Loop through the colors and create CSS variables
      for (const [colorName, colorValue] of Object.entries(colors)) {
        if (typeof colorValue === 'string') {
          root[`--${colorName}`] = colorValue; // For single hex values
        } else if (typeof colorValue === 'object') {
          for (const [shade, hex] of Object.entries(colorValue)) {
            root[`--${colorName}-${shade}`] = hex; // For shades of colors like red-500
          }
        }
      }

      // Add the variables to the :root selector
      addBase({
        ':root': root,
      });
    }),
  ],
}