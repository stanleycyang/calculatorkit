/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        logo: ["--font-dancing", "system-ui", "sans-serif"],
        default: ["--font-open-sans", "system-ui", "sans-serif"],
      },
      backgroundColor: {
        "pastel-blue": "#00235B",
        "pastel-green": "#539165",
        "pastel-yellow": "#FD841F",
        "pastel-red": "#E21818",
        "pastel-pink": "#D27685",
        "pastel-purple": "#37306B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
