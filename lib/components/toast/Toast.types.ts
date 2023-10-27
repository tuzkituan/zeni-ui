import { IAlert } from "../alert/Alert.types";

export type ToastPlacement =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export const ToastPlacementArr: ToastPlacement[] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

export interface IToast extends IAlert {
  id?: string;
  placement?: ToastPlacement;
  duration?: number;
}
