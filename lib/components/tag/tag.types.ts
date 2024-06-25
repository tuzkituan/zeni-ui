import { DetailedHTMLProps } from "react";
import { HTMLAttributes } from "react";

export interface ITag
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
  variant?: "outline" | "solid" | "subtle";
  size?: "sm" | "md" | "lg";
  color?: string;
}
