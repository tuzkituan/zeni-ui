import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "../../theme/theme.context";
import { IText } from "./Text.types";

const defaultProps: Partial<IText> = {
  children: undefined,
};

export const Text = (props: IText) => {
  const theme = useComponentTheme("Text");
  const {
    children,
    className = "",
    ...restProps
  } = { ...defaultProps, ...props };

  return (
    <span className={twMerge(theme.base(), className)} {...restProps}>
      {children}
    </span>
  );
};
