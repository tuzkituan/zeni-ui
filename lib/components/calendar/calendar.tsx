import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import { format, isSameDay, isSameMonth, isSameYear, isToday } from "date-fns";
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
    mode: modeProp = "day",
    ...restProps
  } = props;

  const theme = useComponentStyle("Calendar");

  const {
    viewMode,
    setViewMode,
    currentDate,
    selectedDate,
    onSelectDate,
    currentMonthDateList = [],
    weekdayList = [],
    monthList = [],
    decadeYearList = [],
    onPrevMonth,
    onNextMonth,
    onPrevYear,
    onNextYear,
    onPrevDecade,
    onNextDecade,
    onPickMonth,
    onPickYear,
  } = useCalendar({
    initialSelectedDate: selectedDateProp,
    mode: modeProp,
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

  const footerClasses = useMemo(() => {
    return twMerge(theme.footer());
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
    onSelectDate(date);
    onDateHover(undefined);
  };

  const onDateHover = (date?: Date) => {
    onDateHoverProp?.(date);
  };

  // UI
  const renderHeader = () => {
    if (viewMode === "day") {
      return (
        <div className={theme.header()}>
          <button onClick={onPrevYear} className={theme.headerArrow()}>
            <CaretDoubleLeft />
          </button>
          <button onClick={onPrevMonth} className={theme.headerArrow()}>
            <CaretLeft />
          </button>
          <div className="flex-1" />
          <button
            className={theme.headerButton()}
            onClick={() => setViewMode("month")}
          >
            {format(currentDate, "MMM")}
          </button>

          <button
            className={theme.headerButton()}
            onClick={() => setViewMode("year")}
          >
            {format(currentDate, "yyyy")}
          </button>
          <div className="flex-1" />

          <button onClick={onNextMonth} className={theme.headerArrow()}>
            <CaretRight />
          </button>
          <button onClick={onNextYear} className={theme.headerArrow()}>
            <CaretDoubleRight />
          </button>
        </div>
      );
    }
    if (viewMode === "month") {
      return (
        <div className={theme.header()}>
          <button onClick={onPrevYear} className={theme.headerArrow()}>
            <CaretLeft />
          </button>
          <div className="flex-1" />
          <button
            className={theme.headerButton()}
            onClick={() => setViewMode("year")}
          >
            {format(currentDate, "yyyy")}
          </button>
          <div className="flex-1" />
          <button onClick={onNextYear} className={theme.headerArrow()}>
            <CaretRight />
          </button>
        </div>
      );
    }
    if (viewMode === "year") {
      const first = decadeYearList[0];
      const last = decadeYearList[decadeYearList.length - 1];
      return (
        <div className={theme.header()}>
          <button onClick={onPrevDecade} className={theme.headerArrow()}>
            <CaretLeft />
          </button>
          <div className="flex-1" />
          <button
            className={theme.headerButton({
              isNoAction: true,
            })}
          >
            {`${format(first, "yyyy")} - ${format(last, "yyyy")}`}
          </button>
          <div className="flex-1" />
          <button onClick={onNextDecade} className={theme.headerArrow()}>
            <CaretRight />
          </button>
        </div>
      );
    }
    return null;
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

  const renderContent = () => {
    if (viewMode === "day") {
      return (
        <div className={tableContainerClasses}>
          <table
            className={tableClasses}
            onMouseLeave={() => {
              onDateHover(undefined);
            }}
          >
            {renderDateLabels(weekdayList)}
            {renderRows(currentMonthDateList)}
          </table>
        </div>
      );
    }
    if (viewMode === "month") {
      const rows: Date[][] = [];
      for (let i = 0; i < monthList.length; i += 4) {
        rows.push(monthList.slice(i, i + 4));
      }

      return (
        <div className={tableContainerClasses}>
          <div className="flex flex-wrap">
            <table className={tableClasses}>
              {rows.map((row, i) => (
                <tr key={i} className={valueRowClasses}>
                  {row.map((x, i) => {
                    const _isSameMonth = selectedDate
                      ? isSameMonth(x, selectedDate) &&
                        isSameYear(x, selectedDate)
                      : false;
                    return (
                      <td
                        key={i}
                        onClick={() => {
                          if (modeProp === "month") {
                            onDateClick(x);
                          } else {
                            onPickMonth(x);
                          }
                        }}
                        className={theme.monthPickValueCell()}
                      >
                        <div
                          className={theme.monthPickValueCellInner({
                            isSameMonth: _isSameMonth,
                          })}
                        >
                          {format(x, "MMM")}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </table>
          </div>
        </div>
      );
    }
    if (viewMode === "year") {
      const rows: Date[][] = [];
      for (let i = 0; i < decadeYearList.length; i += 3) {
        rows.push(decadeYearList.slice(i, i + 3));
      }

      return (
        <div className={tableContainerClasses}>
          <div className="flex flex-wrap">
            <table className={tableClasses}>
              {rows.map((row, i) => (
                <tr key={i} className={valueRowClasses}>
                  {row.map((x, i) => {
                    const _isSameYear = selectedDate
                      ? isSameYear(x, selectedDate)
                      : false;
                    return (
                      <td
                        key={i}
                        onClick={() => {
                          if (modeProp === "year") {
                            onDateClick(x);
                          } else {
                            onPickYear(x);
                          }
                        }}
                        className={theme.yearPickValueCell()}
                      >
                        <div
                          className={theme.yearPickValueCellInner({
                            isSameYear: _isSameYear,
                          })}
                        >
                          {format(x, "yyyy")}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </table>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderFooter = () => {
    if (viewMode === "day") {
      return (
        <div
          className={footerClasses}
          onMouseLeave={() => {
            onDateHover(undefined);
          }}
        >
          <div
            onClick={() => {
              onDateClick(new Date());
            }}
            className={theme.footerButton()}
            onMouseOver={() => {
              onDateHover(new Date());
            }}
          >
            Now
          </div>
        </div>
      );
    }
    return null;
  };

  // MAIN
  return (
    <div className={containerClasses} {...restProps}>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </div>
  );
};
