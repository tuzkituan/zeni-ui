import { useEffect } from "react";
import { applyTheme } from "../main";
import { ThemeType } from "../customization/theme";


export const SkyProvider = ({
  initialTheme,
  children,
}: {
  initialTheme?: ThemeType;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const defaultTheme = (savedTheme as ThemeType) || initialTheme || "baseLight";
    applyTheme(defaultTheme);
    localStorage.setItem("theme", defaultTheme);
  }, [initialTheme]);

  return <>{children}</>;
};