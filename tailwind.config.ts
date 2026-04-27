import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F5E6B8",
          dark: "#B8960C",
        },
        black: {
          DEFAULT: "#0A0A0A",
          light: "#1A1A1A",
          muted: "#2A2A2A",
        },
        accent: "#FFD700",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F5E6B8, #D4AF37, #B8960C)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0A, #1A1A1A)",
      },
    },
  },
  plugins: [],
};
export default config;
