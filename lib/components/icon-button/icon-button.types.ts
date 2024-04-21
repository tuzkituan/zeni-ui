export interface IIconButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  spinner?: React.ReactNode;
  variant?: "text" | "outline" | "subtle" | "solid" | "link";
  isDanger?: boolean;
}
