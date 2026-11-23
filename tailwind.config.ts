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
        dark: {
          bg: "#070b14",
          surface: "#0c1220",
          card: "rgba(15, 23, 42, 0.7)",
          cardHover: "rgba(15, 23, 42, 0.9)",
        },
        primary: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
        },
        accent: {
          cyan: "#38bdf8",
          glow: "rgba(56, 189, 248, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(56, 189, 248, 0.25)",
        "glow-lg": "0 0 50px rgba(56, 189, 248, 0.35)",
        "pill-glow": "0 0 15px rgba(37, 99, 235, 0.4)",
      },
      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
