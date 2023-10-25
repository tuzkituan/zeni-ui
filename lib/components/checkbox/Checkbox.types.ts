import { InputHTMLAttributes } from "react";

export interface ICheckbox
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "checked" | "readonly" | "disabled"
  > {
  children?: React.ReactNode;
  value?: string | number;
  spacing?: string | number;
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  isChecked?: boolean;
  isIndeterminate?: boolean;
  isReadOnly?: boolean;
}

export interface ICheckboxGroup {
  children?: React.ReactNode;
  defaultValue?: (string | number)[];
  value?: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
  layout?: "horizontal" | "vertical";
  spacing?: string | number;
}
