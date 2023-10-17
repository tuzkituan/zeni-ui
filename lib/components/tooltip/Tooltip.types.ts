export interface ITooltip {
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
  content?: string;
  children?: React.ReactNode;
}
