import { InputHTMLAttributes } from "react";

export interface INumberInput
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange" | "value"
  > {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  // min?: number;
  // max?: number;
  // step?: number;
  // value?: number;
  // defaultValue?: number;
  // onChange?: (value: number) => void;
}

export interface INumberInputArrow {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}
