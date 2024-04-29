import { useEffect, useState } from "react";
import { applyThemeMode, getThemeMode } from "./utils";

export function useChangeTheme() {
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(() => {
    const savedTheme = getThemeMode() as "light" | "dark";
    return savedTheme || undefined;
  });

  useEffect(() => {
    if (theme) {
      applyThemeMode(theme);
    }
  }, [theme]);

  return { theme, setTheme };
}
