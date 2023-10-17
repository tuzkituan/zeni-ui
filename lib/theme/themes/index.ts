// src/themes/index.ts
import baseLight from "./light/base";
import baseDark from "./dark/base";
import { IThemes } from "./utils";

/**
 * The default theme to load
 */
export const THEMES = {
  baseLight: "baseLight",
  baseDark: "baseDark",
};
export const DEFAULT_THEME = THEMES.baseLight;

export const themes: IThemes = {
  baseLight,
  baseDark,
};
