export interface ICard
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "title"
  > {
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  contentClassName?: string;
  headerClassName?: string;
}
