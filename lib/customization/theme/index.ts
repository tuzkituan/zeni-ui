// src/themes/index.ts
import baseDark from "./dark/base";
import baseLight from "./light/base";
// import pinkLight from "./light/pink";
// import greenLight from "./light/green";
import { IThemes } from "./utils";

export const THEMES = {
  baseLight: "baseLight",
  baseDark: "baseDark",
  // pinkLight: "pinkLight",
  // greenLight: "greenLight",
};

export type ThemeType = keyof typeof THEMES;

export const themes: IThemes = {
  baseLight,
  baseDark,
  // pinkLight,
  // greenLight,
};
