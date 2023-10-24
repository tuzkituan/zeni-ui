import { ReactNode } from "react";

export type IPlacement =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export const TOAST_PLACEMENTS: IPlacement[] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

export interface IToast {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  placement?: IPlacement;
  status?: "info" | "success" | "warning" | "error";
  variant?: "subtle" | "solid" | "left-accent" | "top-accent";
  duration?: number;
}
