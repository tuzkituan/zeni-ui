// src/themes/index.ts
import baseDark from "./dark/base";
import baseLight from "./light/base";
import blueLight from "./light/blue";
// import pinkLight from "./light/pink";
// import greenLight from "./light/green";
import { IThemes } from "./utils";

const THEMES = {
  baseLight: "baseLight",
  blueLight: "blueLight",
  baseDark: "baseDark",
  // pinkLight: "pinkLight",
  // greenLight: "greenLight",
};

export type ThemeType = keyof typeof THEMES;

export const zeniThemes: IThemes = {
  baseLight,
  baseDark,
  blueLight,
  // pinkLight,
  // greenLight,
};
