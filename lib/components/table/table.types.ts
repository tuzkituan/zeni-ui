export interface ITable
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  columns?: ITableColumn[];
  data?: ITableRecord[];
  size?: "sm" | "md" | "lg";
  isBordered?: boolean;
  isLoading?: boolean;
  onRow?: (record: ITableRecord, index: number) => void;
  showHeader?: boolean;
}

export type ITableRecord = Record<string, any>;

export interface ITableColumn {
  key: string | number;
  dataIndex: string;
  title: React.ReactNode;
  width?: string | number;
  ellipse?: boolean;
  render?: (value: any, row: ITableRecord, index: number) => React.ReactNode;
}
