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
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        negative: "var(--color-negative)",
        positive: "var(--color-positive)",
        "primary-background": "var(--background-primary)",
        "sec-background": "var(--background-sec)",
        "primary-text": "var(--color-text-primary)",
        "line-primary": "var(--line-primary)",
      },
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
