import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0DADE0",
        secondary: "#101250",
        disable: "#707070",
        background: "#FFFFFF",
        Dark: "#000000",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero_image: "url('/computer repair.jpg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
