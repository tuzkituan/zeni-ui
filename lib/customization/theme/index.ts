import baseDark from "./dark/base";
import baseLight from "./light/base";
import blueLight from "./light/blue";
import { IThemes } from "./utils";

const themeList = {
  baseLight: "baseLight",
  blueLight: "blueLight",
  baseDark: "baseDark",
};

export type IThemeType = keyof typeof themeList;

export const zeniThemes: IThemes = {
  baseLight,
  baseDark,
  blueLight,
};
