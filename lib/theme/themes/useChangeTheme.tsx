import { useEffect, useState } from "react";
import { ThemeType } from ".";
import { applyTheme } from "./utils";

export function useChangeTheme() {
  const [theme, setTheme] = useState<ThemeType>("baseLight");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
}
