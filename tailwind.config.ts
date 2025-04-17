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
          DEFAULT: "#BFA75A", // Old money gold – muted, warm
          dark: "#8C7533", // Deeper antique/brassy gold
          light: "#E5D7A3", // Pale dusty gold
        },
        secondary: {
          DEFAULT: "#0B1D3A", // Deep navy – classic luxury blue
          dark: "#081323", // Almost-black navy
          light: "#1F2E47", // Slate blue-gray
        },
        accent: {
          DEFAULT: "#F3EFDC", // Elegant ivory/cream
          dark: "#2A2E37", // Dusty deep gray-blue
          light: "#FAF7ED", // Parchment white
        },
        textColor: {
          DEFAULT: "#EDE3B9", // Champagne gold – subtle, readable
          dark: "#F5F5F5", // Soft ivory – perfect on dark bg
          light: "#C6B170", // Aged metallic gold
        },
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
        float: "float 3s ease-in-out infinite",
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
