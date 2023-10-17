import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "../../theme/theme.context";
import { ICenter, ICircle } from "./Center.styles";

const defaultProps: Partial<ICenter> = {
  children: undefined,
};

export const Center = (props: ICenter) => {
  const theme = useComponentTheme("Center");
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

export const Circle = (props: ICircle) => {
  const { size = 40, className, ...rest } = props;
  const theme = useComponentTheme("Center");
  return Center({
    ...rest,
    className: twMerge(theme.circle(), className),
    style: {
      ...props.style,
      width: size,
      height: size,
    },
  });
};
