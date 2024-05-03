export interface IButton
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "size" | "disabled"
  > {
  children?: React.ReactNode;
  iconSpacing?: string | number;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loadingText?: string;
  size?: "xs" | "sm" | "md" | "lg";
  spinner?: React.ReactNode;
  spinnerPlacement?: "start" | "end";
  variant?: "text" | "outline" | "subtle" | "solid" | "link";
  isDanger?: boolean;
}
