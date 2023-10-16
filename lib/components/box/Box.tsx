import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "../../theme/theme.context";
import { IBox } from "./Box.types";

const defaultProps: Partial<IBox> = {
  children: undefined,
};

export const Box = (props: IBox) => {
  const theme = useComponentTheme("Box");
  const {
    children,
    className = "",
    ...restProps
  } = { ...defaultProps, ...props };

  return (
    <div className={twMerge(theme.base(), className)} {...restProps}>
      {children}
    </div>
  );
};
