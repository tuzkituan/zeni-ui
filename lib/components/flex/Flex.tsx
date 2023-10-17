import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "../../theme/theme.context";
import { IFlex } from "./Flex.types";

const defaultProps: Partial<IFlex> = {
  children: undefined,
};

export const Flex = (props: IFlex) => {
  const theme = useComponentTheme("Flex");
  const {
    children,
    className = "",
    direction,
    justify,
    align,
    wrap,
    gap,
    ...restProps
  } = { ...defaultProps, ...props };

  return (
    <div
      className={twMerge(
        theme.base({
          direction,
          justify,
          align,
          wrap,
        }),
        className
      )}
      style={{
        gap,
        ...restProps.style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

export const Spacer = () => {
  const theme = useComponentTheme("Flex");
  return <div className={twMerge(theme.spacer())} />;
};
