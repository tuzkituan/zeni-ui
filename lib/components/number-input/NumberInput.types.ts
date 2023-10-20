import { InputHTMLAttributes } from "react";

export interface INumberInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
}

export interface INumberInputArrow {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}
