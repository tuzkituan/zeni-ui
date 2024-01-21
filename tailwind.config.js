/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "var(--color-primary)",
        "color-background": "var(--color-neutral-5)",
        "color-component-background": "var(--color-neutral-5)",

        primary: {
          base: "var(--color-primary)",
          5: "var(--color-primary-5)",
          10: "var(--color-primary-10)",
          20: "var(--color-primary-20)",
          30: "var(--color-primary-30)",
          40: "var(--color-primary-40)",
          50: "var(--color-primary-50)",
          60: "var(--color-primary-60)",
          70: "var(--color-primary-70)",
          80: "var(--color-primary-80)",
          90: "var(--color-primary-90)",
          100: "var(--color-primary-100)",
        },
        neutral: {
          base: "var(--color-neutral)",
          5: "var(--color-neutral-5)",
          10: "var(--color-neutral-10)",
          20: "var(--color-neutral-20)",
          30: "var(--color-neutral-30)",
          40: "var(--color-neutral-40)",
          50: "var(--color-neutral-50)",
          60: "var(--color-neutral-60)",
          70: "var(--color-neutral-70)",
          80: "var(--color-neutral-80)",
          90: "var(--color-neutral-90)",
          100: "var(--color-neutral-100)",
        },
        success: {
          base: "var(--color-success)",
          10: "var(--color-success-10)",
          20: "var(--color-success-20)",
          30: "var(--color-success-30)",
          40: "var(--color-success-40)",
          50: "var(--color-success-50)",
          60: "var(--color-success-60)",
          70: "var(--color-success-70)",
          80: "var(--color-success-80)",
          90: "var(--color-success-90)",
          100: "var(--color-success-100)",
        },
        warning: {
          base: "var(--color-warning)",
          10: "var(--color-warning-10)",
          20: "var(--color-warning-20)",
          30: "var(--color-warning-30)",
          40: "var(--color-warning-40)",
          50: "var(--color-warning-50)",
          60: "var(--color-warning-60)",
          70: "var(--color-warning-70)",
          80: "var(--color-warning-80)",
          90: "var(--color-warning-90)",
          100: "var(--color-warning-100)",
        },
        error: {
          base: "var(--color-error)",
          10: "var(--color-error-10)",
          20: "var(--color-error-20)",
          30: "var(--color-error-30)",
          40: "var(--color-error-40)",
          50: "var(--color-error-50)",
          60: "var(--color-error-60)",
          70: "var(--color-error-70)",
          80: "var(--color-error-80)",
          90: "var(--color-error-90)",
          100: "var(--color-error-100)",
        },
        info: {
          base: "var(--color-info)",
          10: "var(--color-info-10)",
          20: "var(--color-info-20)",
          30: "var(--color-info-30)",
          40: "var(--color-info-40)",
          50: "var(--color-info-50)",
          60: "var(--color-info-60)",
          70: "var(--color-info-70)",
          80: "var(--color-info-80)",
          90: "var(--color-info-90)",
          100: "var(--color-info-100)",
        },
      },
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
        base: "var(--color-neutral-20)",
      }),
      borderRadius: {
        base: "8px",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
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
      strategy: 'class', // only generate classes
    }),
  ],
};
