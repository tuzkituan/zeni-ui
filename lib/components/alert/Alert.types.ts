export interface IAlert
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  status?: "info" | "success" | "warning" | "error";
  variant?: "subtle" | "solid" | "left-accent" | "top-accent";
  iconSize?: string | number;
  spacing?: string | number;
  contentClassName?: string;
}
