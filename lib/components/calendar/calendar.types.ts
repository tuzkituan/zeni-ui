export interface ICalendar
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onDateClick?: (date: Date) => void;
  onDateHover?: (date?: Date) => void;
  selectedDate?: Date;
  mode?: ICalendarViewMode;
  disabledDate?: (current: Date) => boolean;
}

export interface IUseCalendar {
  labelFormat?: string;
  initialSelectedDate?: Date;
  mode?: ICalendarViewMode;
}

export type ICalendarViewMode = "day" | "month" | "year";
