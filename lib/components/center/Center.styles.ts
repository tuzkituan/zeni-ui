export interface ICenter
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export interface ICircle extends ICenter {
  size?: string | number;
}
