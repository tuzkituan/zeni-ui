import { UseToastOptions } from "./useToast";

export type ToastId = number | string;
export type ToastPosition =
  | "top"
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right";
export type ToastMessage = (props: any) => React.ReactNode;
export interface ToastOptions {
  message: ToastMessage;
  id: ToastId;
  duration: number | null;
  status: ToastStatus;
  position: ToastPosition;
  onRequestRemove(): void;
  onCloseComplete?(): void;
  requestClose?: boolean;
}
export type ToastState = {
  [K in ToastPosition]: ToastOptions[];
};

export type ToastStatus = "success" | "error" | "warning" | "info";

export interface RenderProps extends UseToastOptions {
  /**
   * Function to close the toast
   */
  onClose(): void;
}

export interface CloseAllToastsOptions {
  positions?: ToastPosition[];
}
