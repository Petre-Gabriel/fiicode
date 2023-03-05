/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1B4BCD",
          200: "#1947C2",
          300: "#1843B8",
          400: "#163FAD",
          500: "#1B57DB",
          600: "#143797",
          700: "#12338C",
          800: "#112F82",
          900: "#0F2B77",
          DEFAULT: "#1B57DB",
        },
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};
