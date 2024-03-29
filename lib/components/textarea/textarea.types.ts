import { TextareaHTMLAttributes } from "react";

export interface ITextarea
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "size" | "disabled" | "readOnly"
  > {
  variant?: "outline" | "filled" | "flushed";
  placeholder?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isResizable?: boolean;
}
