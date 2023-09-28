/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#4CAF50",
        "secondary-green": "#8BC34A",
        "text-accent-green": "#00BCD4",
        "text-black": "#000000",
        white: "#FFFFFF",
      },
      backgroundColor: {
        "bg-black": "#111111",
        "bg-primary-green": "#4CAF50",
        "bg-secondary-green": "#8BC34A",
      },
      borderColor: {
        "border-accent": "#00BCD4",
      },
    },
  },
  plugins: [],
};
