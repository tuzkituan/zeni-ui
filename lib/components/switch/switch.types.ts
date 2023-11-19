export interface ISwitch
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "disabled" | "checked" | "readonly" | "readOnly"
  > {
  size?: "sm" | "md" | "lg";
  defaultChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}
