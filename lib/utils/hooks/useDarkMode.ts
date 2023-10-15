import { useEffect } from "react";
import { usePrefersDarkMode } from "./usePrefersDarkMode";
import { useSafeLocalStorage } from "./useSafeLocalStorage";

export function useDarkMode(): [boolean, (value: boolean) => void] {
  const [isEnabled, setIsEnabled] = useSafeLocalStorage("data-theme", false);
  const prefersDarkMode = usePrefersDarkMode();

  const enabled = isEnabled ?? prefersDarkMode;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const theme = enabled ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [enabled]);

  return [enabled, setIsEnabled];
}
