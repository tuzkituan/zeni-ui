import { SelectHTMLAttributes } from "react";

export interface IDatePicker
  extends Omit<SelectHTMLAttributes<HTMLInputElement>, "size"> {
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  isDisabled?: boolean;
  isReadOnly?: boolean;
  icon?: React.ReactNode;
  format?: string
}
