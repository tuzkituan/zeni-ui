import * as styles from "./styles/index";
import { createContext, Provider, useContext } from "react";

export interface Theme {
  components: ThemeComponents;
}

interface ThemeComponents {
  Button: typeof styles.buttonStyles;
  Box: typeof styles.boxStyles;
}

const defaultTheme: Theme = {
  components: {
    Button: styles.buttonStyles,
    Box: styles.boxStyles,
  },
};

export interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
});

export const ThemeProvider: Provider<ThemeContextType> = ThemeContext.Provider;

export function useTheme(): Theme {
  return useContext(ThemeContext)?.theme || defaultTheme;
}

export function useComponentTheme<C extends keyof ThemeComponents>(
  component: C
) {
  const theme = useTheme();

  return theme.components[component];
}
