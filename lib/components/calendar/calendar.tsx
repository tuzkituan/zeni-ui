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
  const {
    className = "",
    onDateClick: onDateClickProp,
    onDateHover: onDateHoverProp,
    selectedDate: selectedDateProp,
    ...restProps
  } = props;

  const theme = useComponentStyle("Calendar");

  const {
    currentDate,
    selectedDate,
    m_onSelectDate,
    m_dates = [],
    m_dateLabels = [],
    m_onPrevMonth,
    m_onNextMonth,
    m_onPrevYear,
    m_onNextYear,
  } = useCalendar({
    initialSelectedDate: selectedDateProp,
  });

  // CONTAINER & WRAPPER
  const containerClasses = useMemo(() => {
    return twMerge(theme.container(), className);
  }, [className, theme]);

  const tableClasses = useMemo(() => {
    return twMerge(theme.table());
  }, [theme]);

  const tableContainerClasses = useMemo(() => {
    return twMerge(theme.tableContainer());
  }, [theme]);

  // ROWS
  const labelRowClasses = useMemo(() => {
    return twMerge(theme.labelRow());
  }, [theme]);

  const valueRowClasses = useMemo(() => {
    return twMerge(theme.valueRow());
  }, [theme]);

  // FUNCS
  const onDateClick = (date: Date) => {
    onDateClickProp?.(date);
    m_onSelectDate(date);
    onDateHover(undefined);
  };

  const onDateHover = (date?: Date) => {
    onDateHoverProp?.(date);
  };

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
          {format(currentDate, "MMM")}
        </button>

        <button className={theme.headerButton()}>
          {format(currentDate, "yyyy")}
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
              const _isSameMonth = isSameMonth(currentDate, date);
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
                    onClick={() => onDateClick(date)}
                    title={format(date, "MM/dd/yyyy")}
                    onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
                      onDateHover(new Date(e.currentTarget.title));
                    }}
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
        <table
          className={tableClasses}
          onMouseLeave={() => {
            onDateHover(undefined);
          }}
        >
          {renderDateLabels(m_dateLabels)}
          {renderRows(m_dates)}
        </table>
      </div>
    </div>
  );
};
