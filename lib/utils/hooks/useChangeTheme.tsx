import { useEffect, useState } from "react";
import { THEMES } from "../../theme/themes";
import { applyTheme } from "../../theme/themes/utils";

type ThemeType = keyof typeof THEMES;

export function useChangeTheme() {
  const [theme, setTheme] = useState<ThemeType>("baseLight");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
}
