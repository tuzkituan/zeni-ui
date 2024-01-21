import { SelectHTMLAttributes } from "react";

export interface ISelect
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "size" | "value" | "defaultValue" | "onChange"
  > {
  options?: ISelectOption[];
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed";
  value?: ISelectOption | ISelectOption[];
  defaultValue?: ISelectOption | ISelectOption[];
  onChange?: (value?: ISelectOption | ISelectOption[]) => void;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  isClearable?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  className?: string;
  dropdownClassName?: string;
  placeholder?: string;
  placement?: "top" | "bottom";
  isMultiple?: boolean;
  tagRender?: ({
    item,
    onClose,
  }: {
    item: ISelectOption;
    onClose?: () => void;
  }) => React.ReactNode;
}

export type ISelectValue = string | number;

export interface ISelectOption {
  label?: React.ReactNode;
  value?: ISelectValue;
  icon?: React.ReactNode;
  isDisabled?: boolean;
}
