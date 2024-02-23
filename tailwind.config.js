/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      "harvestgold": "#E0A500",
      "darkpurple": "#210029",
      "gunmetal-100": "#22333B",
      "gunmetal-50": "#3C5A68,",
      "platinum": "#D3D5D7",
      "white": "#FFFFFF",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}


