const tokens = require("./src/theme/tokens.json");

const semanticColor = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      borderRadius: {
        sm: tokens.radius.sm,
        md: tokens.radius.md,
        lg: tokens.radius.lg,
        xl: tokens.radius.xl,
        "2xl": tokens.radius["2xl"],
        "3xl": tokens.radius["3xl"],
        "4xl": tokens.radius["4xl"]
      },
      colors: {
        background: semanticColor("background"),
        foreground: semanticColor("foreground"),
        card: {
          DEFAULT: semanticColor("card"),
          foreground: semanticColor("card-foreground")
        },
        popover: {
          DEFAULT: semanticColor("popover"),
          foreground: semanticColor("popover-foreground")
        },
        primary: {
          DEFAULT: semanticColor("primary"),
          foreground: semanticColor("primary-foreground")
        },
        secondary: {
          DEFAULT: semanticColor("secondary"),
          foreground: semanticColor("secondary-foreground")
        },
        muted: {
          DEFAULT: semanticColor("muted"),
          foreground: semanticColor("muted-foreground")
        },
        accent: {
          DEFAULT: semanticColor("accent"),
          foreground: semanticColor("accent-foreground")
        },
        destructive: semanticColor("destructive"),
        border: semanticColor("border"),
        input: semanticColor("input"),
        ring: semanticColor("ring")
      }
    }
  },
  plugins: []
};
