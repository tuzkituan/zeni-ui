export interface IFlex
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  align?: "flex-end" | "flex-start" | "center" | "baseline" | "stretch";
  justify?:
    | "flex-end"
    | "flex-start"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string | number;
  // basis?: number;
  // grow?: number;
  // shrink?: number;
}
