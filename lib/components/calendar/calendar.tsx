import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { add, format, isSameDay, isSameMonth, isToday, sub } from "date-fns";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ICalendar } from "./calendar.types";
import { useCalendar } from "./use-calendar";

export const Calendar = (props: ICalendar) => {
  const { className = "", ...restProps } = props;

  const theme = useComponentStyle("Calendar");

  const {
    current,
    selectedDate,
    m_onSelectDate,
    m_dates = [],
    m_dateLabels = [],
    m_onPrevMonth,
    m_onNextMonth,
  } = useCalendar();

  // CONTAINER & WRAPPER
  const containerClasses = useMemo(() => {
    return twMerge(theme.container(), className);
  }, [className, theme]);

  const tableClasses = useMemo(() => {
    return twMerge(theme.table(), className);
  }, [className, theme]);

  // ROWS
  const labelRowClasses = useMemo(() => {
    return twMerge(theme.labelRow(), className);
  }, [className, theme]);

  const valueRowClasses = useMemo(() => {
    return twMerge(theme.valueRow(), className);
  }, [className, theme]);

  // UI
  const renderHeader = () => {
    return (
      <div className={theme.header()}>
        <button onClick={m_onPrevMonth}>
          <CaretLeft />
        </button>
        {format(current, "MMM yyyy")}
        <button onClick={m_onNextMonth}>
          <CaretRight />
        </button>
      </div>
    );
  };
  const renderDateLabels = (arr: string[] = []) => {
    return (
      <tr className={labelRowClasses}>
        {arr.map((x) => (
          <th key={x} className={theme.labelCell()}>
            {x}
          </th>
        ))}
      </tr>
    );
  };

  const renderRows = (arr: Date[] = []) => {
    const weeks: Date[][] = [];
    for (let i = 0; i < arr.length; i += 7) {
      weeks.push(arr.slice(i, i + 7));
    }

    return weeks.map((week, weekIndex) => (
      <tr key={weekIndex} className={valueRowClasses}>
        {week.map((date, dateIndex) => {
          const _isSameMonth = isSameMonth(current, date);
          const _isSelectedDate = selectedDate
            ? isSameDay(selectedDate, date)
            : false;
          return (
            <td
              key={dateIndex}
              className={theme.valueCell()}
              onClick={() => m_onSelectDate(date)}
            >
              <div
                className={theme.valueCellInner({
                  isToday: isToday(date),
                  isSameMonth: _isSameMonth,
                  isSelectedDate: _isSelectedDate,
                })}
              >
                {format(date, "d")}
              </div>
            </td>
          );
        })}
      </tr>
    ));
  };

  // MAIN
  return (
    <div className={containerClasses} {...restProps}>
      {renderHeader()}
      <table className={tableClasses}>
        {renderDateLabels(m_dateLabels)}
        {renderRows(m_dates)}
      </table>
    </div>
  );
};
