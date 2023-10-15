import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../providers/themeContext";

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext<ThemeContextProps | undefined>(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
};
