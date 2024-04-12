import type { Config } from "tailwindcss";

const config = {
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        palette: {
          blue: "hsl(232, 86%, 60%)",
          green: "hsl(147, 87%, 44%)",
          yellow: "hsl(48, 87%, 49%)",
          orange: "hsl(39, 87%, 49%)",
          red: "hsl(0, 87%, 49%)",
          pink: "hsl(324, 87%, 49%)",
          purple: "hsl(292, 87%, 49%)",
          blueDark: "hsl(260, 87%, 49%)",
          blueSea: "hsl(196, 47%, 51%)",
          greenLight: "hsl(165, 91%, 38%)",
          blueSky: "hsl(214, 91%, 61%)",
        },
        switchButton: {
          primary_enable: "hsl(231 20% 31%)",
          primary_disable: "hsl(200, 6%, 91%)",
          secondary_enable: "#ffffff",
          secondary_disable: "#6A6B7D",
        },
        mainColor: {
          primary: "hsl(231 20% 31%)",
          secondary: "hsl(231 20% 31%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "button-down": "transform rotate-180 ease-linear duration-75",
        "button-up": "transform rotate-0 ease-linear duration-75",
      },
      filter: ["hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
