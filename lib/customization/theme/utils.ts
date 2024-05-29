import { getPalette } from "./color-generator";

export const applyColor = (color: string): void => {
  const palette: string[] = getPalette(color);

  if (palette?.length === 10) {
    document.documentElement.style.setProperty(
      "--color-primary-50",
      palette[0]
    );
    document.documentElement.style.setProperty(
      "--color-primary-100",
      palette[1]
    );
    document.documentElement.style.setProperty(
      "--color-primary-200",
      palette[2]
    );
    document.documentElement.style.setProperty(
      "--color-primary-300",
      palette[3]
    );
    document.documentElement.style.setProperty(
      "--color-primary-400",
      palette[4]
    );
    document.documentElement.style.setProperty(
      "--color-primary-500",
      palette[5]
    );
    document.documentElement.style.setProperty(
      "--color-primary-600",
      palette[6]
    );
    document.documentElement.style.setProperty(
      "--color-primary-700",
      palette[7]
    );
    document.documentElement.style.setProperty(
      "--color-primary-800",
      palette[8]
    );
    document.documentElement.style.setProperty(
      "--color-primary-900",
      palette[9]
    );
  }
  saveAccentColor(color);
};

export const applyThemeMode = (theme: string): void => {
  document.documentElement.setAttribute("data-mode", theme);
  saveThemeMode(theme);
};

export const saveAccentColor = (color: string): void => {
  localStorage.setItem("accent-color", color);
};

export const getAccentColor = (): string => {
  const savedColor = localStorage.getItem("accent-color");
  return savedColor || "";
};

export const saveThemeMode = (theme: string): void => {
  localStorage.setItem("theme-mode", theme);
};

export const getThemeMode = (): string => {
  const savedTheme = localStorage.getItem("theme-mode");
  return savedTheme || "";
};

export const applyBorderRadius = (
  radius?: "sm" | "md" | "lg" | "xl" | number
): void => {
  let value = 0;
  if (typeof radius === "number") {
    value = radius;
  } else {
    switch (radius) {
      case "sm":
        value = 2;
        break;

      case "md":
        value = 4;
        break;

      case "lg":
        value = 8;
        break;

      case "xl":
        value = 12;
        break;

      default:
        value = 8;
        break;
    }
  }
  document.documentElement.style.setProperty("--border-radius", value + "px");
};
