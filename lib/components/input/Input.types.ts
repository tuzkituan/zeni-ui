import { InputHTMLAttributes } from "react";

export interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  isInGroup?: boolean;
}

export interface IInputGroup
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode[];
}
