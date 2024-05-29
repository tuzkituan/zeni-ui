/** @type {import('tailwindcss').Config} */

const {
  getCodeString,
} = require("./lib/customization/theme/color-generator.ts");

export default {
  prefix: "zn-",
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--color-primary-50) / <alpha-value>)",
          100: "rgb(var(--color-primary-100) / <alpha-value>)",
          200: "rgb(var(--color-primary-200) / <alpha-value>)",
          300: "rgb(var(--color-primary-300) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          500: "rgb(var(--color-primary-500) / <alpha-value>)",
          600: "rgb(var(--color-primary-600) / <alpha-value>)",
          700: "rgb(var(--color-primary-700) / <alpha-value>)",
          800: "rgb(var(--color-primary-800) / <alpha-value>)",
          900: "rgb(var(--color-primary-900) / <alpha-value>)",
        },
        success: getCodeString("#68AB83"),
        warning: getCodeString("#AB9F68"),
        error: getCodeString("#AB6C68"),
        info: getCodeString("#6086AB"),
        component: "#1e1e1e",
      },
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
      }),
      borderRadius: {
        base: "var(--border-radius)",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "component-dark": "#1e1e1e",
        "component-light": "#fff",
        "body-dark": "#121212",
        "body-light": "rgb(var(--color-primary-50) / <alpha-value>)",
      }),
      boxShadow: {
        base: "0px 6px 18px 0px rgba(4, 4, 7, 0.05)",
      },
    },
  },
  variants: {
    backgroundColor: ["active"],
  },
  plugins: [
    require("@tailwindcss/forms")({
      // strategy: 'base', // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
