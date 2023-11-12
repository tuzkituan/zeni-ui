import { SelectHTMLAttributes } from "react";

export interface IDatePicker
  extends Omit<
    SelectHTMLAttributes<HTMLInputElement>,
    "size" | "defaultValue" | "value" | "onChange"
  > {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  placement?:
    | "top-center"
    | "top-start"
    | "top-end"
    | "left-start"
    | "left-center"
    | "left-end"
    | "right-start"
    | "right-center"
    | "right-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";
  isDisabled?: boolean;
  isReadOnly?: boolean;
  icon?: React.ReactNode;
  format?: string;
  value?: Date;
  defaultValue?: Date;
  onChange?: (date?: Date) => void;
  isClearable?: boolean;
}
