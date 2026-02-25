import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "Garamond", "serif"],
        mono: ["'Space Mono'", "monospace"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        portal: {
          bg: "#06031a",
          purple: {
            50: "rgba(240,230,255,0.95)",
            100: "rgba(225,200,250,0.9)",
            200: "rgba(195,155,235,0.85)",
            300: "rgba(170,125,215,0.75)",
            glow: "rgba(150,80,220,0.15)",
            border: "rgba(155,90,215,0.1)",
            dim: "rgba(190,158,232,0.38)",
          },
          cool: {
            glow: "rgba(80,160,190,0.08)",
            border: "rgba(100,180,210,0.18)",
          },
          warm: {
            glow: "rgba(170,100,200,0.08)",
            border: "rgba(190,130,220,0.18)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
