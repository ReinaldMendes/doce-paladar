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
        rose: {
          blush: "#F9E8E3",
          soft: "#F2C4C0",
          medium: "#E8A0A0",
          deep: "#C97B7B",
          dark: "#9B5C5C",
        },
        nude: {
          light: "#FAF4F0",
          warm: "#F0E6DF",
          medium: "#E8D5CB",
          dark: "#C4A89A",
        },
        cream: "#FFFDF8",
        mocha: "#6B4A3E",
        chocolate: "#3D2117",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        script: ["var(--font-dancing)", "cursive"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "rose-gradient": "linear-gradient(135deg, #F9E8E3 0%, #F2C4C0 50%, #E8D5CB 100%)",
        "dark-gradient": "linear-gradient(135deg, #1a0e0c 0%, #2d1a16 100%)",
        "hero-mesh": "radial-gradient(ellipse at 20% 50%, rgba(233,160,160,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(249,232,227,0.2) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
