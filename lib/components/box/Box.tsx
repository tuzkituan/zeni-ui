import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IBox } from "./Box.types";

const defaultProps: Partial<IBox> = {
  children: undefined,
};

export const Box = (props: IBox) => {
  const theme = useComponentStyle("Box");
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
