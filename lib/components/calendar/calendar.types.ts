export interface ICalendar
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onDateClick?: (date: Date) => void
  onDateHover?: (date?: Date) => void
  selectedDate?: Date
}
