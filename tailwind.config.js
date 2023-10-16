/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      accentColor: {
        primary: "var(--accent-color)",
        active: "var(--active-accent-color)",
      },
      textColor: {
        accent: "var(--accent-color)",
        primary: "var(--primary-text)",
        "inverse-primary": "var(--inverse-primary-text)",
      },
      backgroundColor: {
        accent: "var(--accent-color)",
        "bg-primary": "var(--bg-primary)",
        active: "var(--active-accent-color)",
        disabled: "var(--light-accent-color)",
      },
      borderColor: {
        accent: "var(--accent-color)",
      },
    },
  },
  plugins: [],
  prefix: "lv-",
};
