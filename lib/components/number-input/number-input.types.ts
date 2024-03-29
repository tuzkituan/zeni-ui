import { InputHTMLAttributes } from "react";

export interface INumberInput
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange" | "value" | "readOnly" | "disabled"
  > {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed";
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  showArrow?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export interface INumberInputArrow {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}
