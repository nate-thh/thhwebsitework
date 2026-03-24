import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        thh: {
          navy: "#0F2742",
          cream: "#F7F3EA",
          charcoal: "#1F2937",
          gold: "#B88A44",
          slate: "#5B6B7A"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 10px 40px -18px rgba(15, 39, 66, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
