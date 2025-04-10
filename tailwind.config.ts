
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E6A168", // Warm caramel color
          dark: "#1A1A1D", // Changed from deep brown to dark charcoal
          light: "#FDE1D3", // Soft peach
        },
        secondary: {
          DEFAULT: "#8B4513", // Saddle brown
          dark: "#222222", // Changed to a darker gray
          light: "#DEB887", // Burlywood
        },
        accent: {
          DEFAULT: "#FEF7CD", // Soft cream
          dark: "#2C2C34", // Changed to a dark slate color
          light: "#FFF8DC", // Cornsilk
        },
        textColor: {
          DEFAULT: "#2C1810", // Deep brown
          dark: "#F5F5F5", // Changed to a lighter off-white
          light: "#4A2511", // Rich brown
        }
      },
      fontFamily: {
        hebrew: ["Heebo", "sans-serif"],
        heading: ["Rubik", "sans-serif"],
        arabicHebrew: ["ArabHeb", "sans-serif"], 
        knafeh: ["Pacifico", "cursive"], 
        classicArabic: ["Amiri", "serif"],
        knafeh1: ["David Libre", "serif"],

      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
