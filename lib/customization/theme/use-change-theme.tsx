import { useEffect, useState } from "react";
import { IThemeType } from ".";
import { applyTheme } from "./utils";

export function useChangeTheme() {
  const [theme, setTheme] = useState<IThemeType | undefined>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? (savedTheme as IThemeType) : undefined;
  });

  useEffect(() => {
    if (theme) {
      applyTheme(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return { theme, setTheme };
}
