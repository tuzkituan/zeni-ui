import * as styles from "./components";
import { createContext, Provider, useContext } from "react";

export interface Style {
  components: StyleComponents;
}

interface StyleComponents {
  Button: typeof styles.buttonStyles;
  Box: typeof styles.boxStyles;
  Text: typeof styles.textStyles;
  Tooltip: typeof styles.tooltipStyles;
  Popover: typeof styles.popoverStyles;
  Center: typeof styles.centerStyles;
  Flex: typeof styles.flexStyles;
}

const defaultStyle: Style = {
  components: {
    Button: styles.buttonStyles,
    Box: styles.boxStyles,
    Text: styles.textStyles,
    Tooltip: styles.tooltipStyles,
    Popover: styles.popoverStyles,
    Center: styles.centerStyles,
    Flex: styles.flexStyles,
  },
};

export interface StyleContextType {
  style: Style;
}

const StyleContext = createContext<StyleContextType>({
  style: defaultStyle,
});

export const StyleProvider: Provider<StyleContextType> = StyleContext.Provider;

export function useStyle(): Style {
  return useContext(StyleContext)?.style || defaultStyle;
}

export function useComponentStyle<C extends keyof StyleComponents>(
  component: C
) {
  const style = useStyle();
  return style.components[component];
}