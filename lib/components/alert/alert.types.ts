export interface IAlert
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "title"
  > {
  title?: React.ReactNode;
  description?: React.ReactNode;
  status?: "info" | "success" | "warning" | "error";
  variant?: "subtle" | "solid" | "left-accent" | "top-accent";
  iconSize?: string | number;
  spacing?: string | number;
  contentClassName?: string;
  icon?: React.ReactNode;
  isClosable?: boolean;
  onClose?: () => void;
}
