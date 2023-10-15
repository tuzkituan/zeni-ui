export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconSpacing?: string | number;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loadingText?: string;
  size: "xs" | "sm" | "md" | "lg";
  spinner?: React.ReactNode;
  spinnerPlacement?: "start" | "end";
  variant: "ghost" | "outline" | "solid" | "link" | "unstyled";
}
