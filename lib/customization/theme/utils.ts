import { themes } from ".";

export type ITheme = Record<string, string>;

export type IThemes = Record<string, ITheme>;

export type IMappedTheme = Record<string, string | null>;

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    "--color-primary-base": variables.primaryBase || "",
    "--color-border-base": variables.borderColorBase || "",
    "--border-radius-base": variables.borderRadiusBase || "",
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
