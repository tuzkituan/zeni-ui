import { IAlert } from "../alert/alert.types";

export type ToastId = number | string;
export type ToastPosition =
  | "top"
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right";
export interface ToastOptions
  extends Pick<
    IAlert,
    "variant" | "icon" | "isClosable" | "onClose" | "onClick" | "extra"
  > {
  title?: React.ReactNode;
  description?: React.ReactNode;
  id?: ToastId;
  duration?: number;
  status?: ToastStatus;
  position?: ToastPosition;
  onRequestRemove?: () => void;
  onCloseComplete?: () => void;
  requestClose?: boolean;
}
export type ToastState = {
  [K in ToastPosition]: ToastOptions[];
};

export type ToastStatus = "success" | "error" | "warning" | "info";

export interface CloseAllToastsOptions {
  positions?: ToastPosition[];
}
