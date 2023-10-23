import { IAlert } from "../alert/Alert.types";

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

export interface IToast extends IAlert {
  id?: string;
  placement?: IPlacement;
  duration?: number;
}
