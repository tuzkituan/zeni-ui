import { useEffect, useState } from "react";
import { ThemeType } from ".";
import { applyTheme } from "./utils";

export function useChangeTheme() {
  const [theme, setTheme] = useState<ThemeType | undefined>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? (savedTheme as ThemeType) : undefined;
  });

  useEffect(() => {
    if (theme) {
      applyTheme(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return { theme, setTheme };
}