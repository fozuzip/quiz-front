/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/src/assets/background.png')",
      },
      colors: {
        "dark-text": "#2F527B",
        violet: "rgba(96, 102, 208, 0.8)",
        yellow: "#F9A826",
      },
    },
  },
  plugins: [],
};
