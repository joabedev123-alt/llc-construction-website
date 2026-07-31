import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#090C11",
          darker: "#101620",
          surface: "#151C27",
          gold: "#C79A58",
          goldLight: "#DAB678",
          offwhite: "#F4F1EA",
          text: "#F8F8F6",
          muted: "#AEB4BD",
          border: "rgba(255, 255, 255, 0.10)",
          borderGold: "rgba(199, 154, 88, 0.40)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C79A58 0%, #DAB678 100%)',
        'dark-radial': 'radial-gradient(circle at center, #151C27 0%, #090C11 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
