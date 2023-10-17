// src/themes/index.ts
import baseDark from "./dark/base";
import baseLight from "./light/base";
import { IThemes } from "./utils";

export const THEMES = {
  baseLight: "baseLight",
  baseDark: "baseDark",
};

export type ThemeType = keyof typeof THEMES;

export const themes: IThemes = {
  baseLight,
  baseDark,
};
