import { InputHTMLAttributes } from "react";

export interface IInput
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "disabled" | "readOnly"
  > {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed";
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}
