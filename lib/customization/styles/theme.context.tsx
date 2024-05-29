import { Provider, createContext, useContext } from "react";
import * as styles from "./components";

export interface Style {
  components: StyleComponents;
}

interface StyleComponents {
  Button: typeof styles.buttonStyles;
  IconButton: typeof styles.iconButtonStyles;
  Box: typeof styles.boxStyles;
  Text: typeof styles.textStyles;
  Tooltip: typeof styles.tooltipStyles;
  Popover: typeof styles.popoverStyles;
  Center: typeof styles.centerStyles;
  Flex: typeof styles.flexStyles;
  Avatar: typeof styles.avatarStyles;
  Input: typeof styles.inputStyles;
  NumberInput: typeof styles.numberInputStyles;
  Checkbox: typeof styles.checkboxStyles;
  Modal: typeof styles.modalStyles;
  Alert: typeof styles.alertStyles;
  Tabs: typeof styles.tabsStyles;
  Radio: typeof styles.radioStyles;
  Toast: typeof styles.toastStyles;
  Select: typeof styles.selectStyles;
  Menu: typeof styles.menuStyles;
  Textarea: typeof styles.textareaStyles;
  Table: typeof styles.tableStyles;
  Spinner: typeof styles.spinnerStyles;
  Image: typeof styles.imageStyles;
  Calendar: typeof styles.calendarStyles;
  DatePicker: typeof styles.datePickerStyles;
  Switch: typeof styles.switchStyles;
  Empty: typeof styles.emptyStyles;
  Carousel: typeof styles.carouselStyles;
  Card: typeof styles.cardStyles;
}

const defaultStyle: Style = {
  components: {
    Button: styles.buttonStyles,
    IconButton: styles.iconButtonStyles,
    Box: styles.boxStyles,
    Text: styles.textStyles,
    Tooltip: styles.tooltipStyles,
    Popover: styles.popoverStyles,
    Center: styles.centerStyles,
    Flex: styles.flexStyles,
    Avatar: styles.avatarStyles,
    Input: styles.inputStyles,
    NumberInput: styles.numberInputStyles,
    Checkbox: styles.checkboxStyles,
    Modal: styles.modalStyles,
    Alert: styles.alertStyles,
    Tabs: styles.tabsStyles,
    Radio: styles.radioStyles,
    Toast: styles.toastStyles,
    Select: styles.selectStyles,
    Menu: styles.menuStyles,
    Textarea: styles.textareaStyles,
    Table: styles.tableStyles,
    Spinner: styles.spinnerStyles,
    Image: styles.imageStyles,
    Calendar: styles.calendarStyles,
    DatePicker: styles.datePickerStyles,
    Switch: styles.switchStyles,
    Empty: styles.emptyStyles,
    Carousel: styles.carouselStyles,
    Card: styles.cardStyles,
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
