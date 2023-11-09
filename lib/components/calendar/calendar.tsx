import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ICalendar } from "./calendar.types";
import { useMemo } from "react";

export const Calendar = (props: ICalendar) => {
  const theme = useComponentStyle("Calendar");
  const { children, className = "", ...restProps } = props;

  const classes = useMemo(() => {
    return twMerge(theme.base(), className);
  }, [className, theme]);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};
