export interface ITabs
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  defaultActiveKey?: string | number;
  activeKey?: string | number;
  onTabChange?: (key: string | number) => void;
  items: ITab[];
  variant?: "underline" | "solid" | "outline";
  isFitted?: boolean;
  navClassName?: string;
  ulClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  extra?: React.ReactNode;
}

export interface ITab {
  content?: React.ReactNode;
  key: string | number;
  disabled?: boolean;
  label: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}
