export type IMenuKey = number | string;
export interface IMenu {
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
  children?: React.ReactNode;
  dropdownClassName?: string;
  onMenuClick?: (key: IMenuKey) => void;
  items?: IMenuItem[];
}

export interface IMenuItem {
  title?: React.ReactNode;
  key: IMenuKey;
  icon?: React.ReactNode;
}
