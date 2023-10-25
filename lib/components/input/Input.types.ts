import { InputHTMLAttributes } from "react";

export interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}
