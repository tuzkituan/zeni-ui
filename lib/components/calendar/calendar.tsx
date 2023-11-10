import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import { format, isSameDay, isSameMonth, isToday } from "date-fns";
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
    m_onPrevYear,
    m_onNextYear,
  } = useCalendar();

  // CONTAINER & WRAPPER
  const containerClasses = useMemo(() => {
    return twMerge(theme.container(), className);
  }, [className, theme]);

  const tableClasses = useMemo(() => {
    return twMerge(theme.table(), className);
  }, [className, theme]);

  const tableContainerClasses = useMemo(() => {
    return twMerge(theme.tableContainer(), className);
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
        <button onClick={m_onPrevYear}>
          <CaretDoubleLeft />
        </button>
        <button onClick={m_onPrevMonth}>
          <CaretLeft />
        </button>
        <div className="flex-1" />
        <button className={theme.headerButton()}>
          {format(current, "MMM")}
        </button>

        <button className={theme.headerButton()}>
          {format(current, "yyyy")}
        </button>
        <div className="flex-1" />

        <button onClick={m_onNextMonth}>
          <CaretRight />
        </button>
        <button onClick={m_onNextYear}>
          <CaretDoubleRight />
        </button>
      </div>
    );
  };
  const renderDateLabels = (arr: string[] = []) => {
    return (
      <thead className={labelRowClasses}>
        <tr>
          {arr.map((x) => (
            <th key={x} className={theme.labelCell()}>
              {x}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderRows = (arr: Date[] = []) => {
    const weeks: Date[][] = [];
    for (let i = 0; i < arr.length; i += 7) {
      weeks.push(arr.slice(i, i + 7));
    }

    return (
      <tbody>
        {weeks.map((week, weekIndex) => (
          <tr key={weekIndex} className={valueRowClasses}>
            {week.map((date, dateIndex) => {
              const _isSameMonth = isSameMonth(current, date);
              const _isSelectedDate = selectedDate
                ? isSameDay(selectedDate, date)
                : false;
              return (
                <td key={dateIndex} className={theme.valueCell()}>
                  <div
                    className={theme.valueCellInner({
                      isToday: isToday(date),
                      isSameMonth: _isSameMonth,
                      isSelectedDate: _isSelectedDate,
                    })}
                    onClick={() => m_onSelectDate(date)}
                  >
                    {format(date, "d")}
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    );
  };

  // MAIN
  return (
    <div className={containerClasses} {...restProps}>
      {renderHeader()}
      <div className={tableContainerClasses}>
        <table className={tableClasses}>
          {renderDateLabels(m_dateLabels)}
          {renderRows(m_dates)}
        </table>
      </div>
    </div>
  );
};
