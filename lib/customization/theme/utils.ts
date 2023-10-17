import { themes } from ".";

export type ITheme = Record<string, string>;

export type IThemes = Record<string, ITheme>;

export type IMappedTheme = Record<string, string | null>;

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    "--color-primary": variables.primary || "",
    "--color-secondary": variables.secondary || "",
    "--color-positive": variables.positive || "",
    "--color-negative": variables.negative || "",
    "--color-text-primary": variables.textPrimary || "",
    "--background-primary": variables.backgroundPrimary || "",
    "--background-sec": variables.backgroundSecondary || "",
    "--line-primary": variables.linePrimary || "",
  };
};

export const applyTheme = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};

export const extend = (extending: ITheme, newTheme: ITheme): ITheme => {
  return { ...extending, ...newTheme };
};
