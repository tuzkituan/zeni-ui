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
        // OLD THINGS
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        negative: "var(--color-negative)",
        positive: "var(--color-positive)",
        "primary-background": "var(--background-primary)",
        "sec-background": "var(--background-sec)",
        "primary-text": "var(--color-text-primary)",
        "line-primary": "var(--line-primary)",

        // NEW THINGS
        "color-primary-base": "var(--color-primary-base)",
        "border-color-base": "var(--color-border-base)",
        "border-radius-base": "var(--border-radius-base)",
      },
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
    }),
  },
  variants: {
    backgroundColor: ["active"],
  },
  plugins: [],
};
