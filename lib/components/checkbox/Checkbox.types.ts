import { InputHTMLAttributes } from "react";

export interface ICheckbox
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "checked" | "readonly" | "disabled"
  > {
  children?: React.ReactNode;
  spacing?: string | number;
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  isChecked?: boolean;
  isIndeterminate?: boolean;
  isReadOnly?: boolean;
}
