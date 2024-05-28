export interface ISpinner {
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  icon?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  overlayClassName?: string;
}
