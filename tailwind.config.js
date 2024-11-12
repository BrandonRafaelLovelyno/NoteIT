/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white:"#FEFAF6",
        blue:"#102C57",
        brown:"#DAC0A3"
      },
    },
  },
  plugins: [],
};
