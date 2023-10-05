import defaultTheme from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
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
        border: "hsl(var(--docit-border))",
        input: "hsl(var(--docit-input))",
        ring: "hsl(var(--docit-ring))",
        background: "hsl(var(--docit-background))",
        foreground: "hsl(var(--docit-foreground))",
        primary: {
          DEFAULT: "#0369a1",
          foreground: "hsl(var(--docit-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--docit-secondary))",
          foreground: "hsl(var(--docit-secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--docit-destructive))",
          foreground: "hsl(var(--docit-destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--docit-muted))",
          foreground: "hsl(var(--docit-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--docit-accent))",
          foreground: "hsl(var(--docit-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--docit-popover))",
          foreground: "hsl(var(--docit-popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--docit-card))",
          foreground: "hsl(var(--docit-card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--docit-radius)`,
        md: `calc(var(--docit-radius) - 2px)`,
        sm: "calc(var(--docit-radius) - 4px)",
      },
      fontFamily: {
        // sans: ["var(--docit-font-sans)", ...defaultTheme.fontFamily.sans],
        sans: ["var(--docit-font-sans)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--docit-radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--docit-radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};
