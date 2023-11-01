import { ReactNode } from "react";

export interface ISelect {
  children?: React.ReactNode;
  options?: ISelectOption[];
}

export interface ISelectOptionLabelValue {
  label?: ReactNode;
  value?: string | number;
}

export type ISelectOption = string | number | ISelectOptionLabelValue;
