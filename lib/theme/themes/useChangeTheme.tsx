import { useEffect, useState } from "react";
import { THEMES } from ".";
import { applyTheme } from "./utils";

type ThemeType = keyof typeof THEMES;

export function useChangeTheme() {
  const [theme, setTheme] = useState<ThemeType>("baseLight");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
}
