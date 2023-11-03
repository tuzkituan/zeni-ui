import { InputHTMLAttributes } from "react";

export interface ITextarea extends InputHTMLAttributes<HTMLTextAreaElement> {
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  placeholder?: string
}
