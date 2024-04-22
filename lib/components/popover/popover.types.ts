export interface IPopover {
  placement?:
    | "top-center"
    | "top-start"
    | "top-end"
    | "left-start"
    | "left-center"
    | "left-end"
    | "right-start"
    | "right-center"
    | "right-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  content?: React.ReactNode;
  children?: React.ReactNode;
  popoverClassName?: string;
  trigger?: "hover" | "click";
}
