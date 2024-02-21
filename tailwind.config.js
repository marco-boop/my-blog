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
      "gunmetal": "#22333B",
      "platinum": "#D3D5D7",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}


