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
        sans: ["Geist Sans", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#F5FAFF",
          100: "#C1DFFF",
          200: "#8DC4FF",
          300: "#59A9FF",
          400: "#2E8DF2",
          500: "#3094FF",
          600: "#2269B5",
          700: "#1C5796",
          800: "#174678",
          900: "#113459",
          950: "#0B223B",
        },
      },
    },
  },
  plugins: [],
};
