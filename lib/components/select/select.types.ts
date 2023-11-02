import { ReactNode, SelectHTMLAttributes } from "react";

export interface ISelect
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "size" | "value" | "defaultValue" | "onChange"
  > {
  options?: ISelectOption[];
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  value?: ISelectOption;
  defaultValue?: ISelectOption;
  onChange?: (value: ISelectOption) => void;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  isClearable?: boolean;
  isSearchable?: boolean;
  className?: string
  dropdownClassName?: string
}

export type ISelectValue = string | number;

export interface ISelectOption {
  label?: ReactNode;
  value?: ISelectValue;
}
