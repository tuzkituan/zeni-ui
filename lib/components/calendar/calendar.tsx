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
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

export const Calendar = (props: ICalendar) => {
  const {
    className = "",
    onDateClick: onDateClickProp,
    onDateHover: onDateHoverProp,
    selectedDate: selectedDateProp,
    mode: modeProp = "day",
    disabledDate: disabledDateProp,
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
          <button onClick={onPrevMonth} className={theme.headerArrow()}>
            <ArrowLeft2 size={20} />
          </button>
          <button onClick={onNextMonth} className={theme.headerArrow()}>
            <ArrowRight2 size={20} />
          </button>
        </div>
      );
    }
    if (viewMode === "month") {
      return (
        <div className={theme.header()}>
          <button onClick={onPrevYear} className={theme.headerArrow()}>
            <ArrowLeft2 size={20} />
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
            <ArrowRight2 size={20} />
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
            <ArrowLeft2 size={20} />
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
            <ArrowRight2 size={20} />
          </button>
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    if (viewMode === "day") {
      const weeks: Date[][] = [];
      for (let i = 0; i < currentMonthDateList.length; i += 7) {
        weeks.push(currentMonthDateList.slice(i, i + 7));
      }

      return (
        <div className={tableContainerClasses}>
          <table
            className={tableClasses}
            onMouseLeave={() => {
              onDateHover(undefined);
            }}
          >
            <thead className={labelRowClasses}>
              <tr>
                {weekdayList.map((x) => (
                  <th key={x} className={theme.labelCell()}>
                    {x}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, weekIndex) => (
                <tr key={weekIndex} className={valueRowClasses}>
                  {week.map((date, dateIndex) => {
                    const _isSameMonth = isSameMonth(currentDate, date);
                    const _isSelectedDate = selectedDate
                      ? isSameDay(selectedDate, date)
                      : false;
                    const _isDisabled = date ? disabledDateProp?.(date) : false;
                    return (
                      <td key={dateIndex} className={theme.valueCell()}>
                        <div
                          className={theme.valueCellInner({
                            isToday: isToday(date),
                            isSameMonth: _isSameMonth,
                            isSelectedDate: _isSelectedDate,
                            isDisabled: _isDisabled,
                          })}
                          onClick={
                            _isDisabled
                              ? () => undefined
                              : () => onDateClick(date)
                          }
                          title={format(date, "MM/dd/yyyy")}
                          onMouseOver={(
                            e: React.MouseEvent<HTMLDivElement>
                          ) => {
                            if (!_isDisabled) {
                              onDateHover(new Date(e.currentTarget.title));
                            }
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
                    const _isDisabled = x ? disabledDateProp?.(x) : false;
                    return (
                      <td
                        key={i}
                        onClick={() => {
                          if (!_isDisabled) {
                            if (modeProp === "month") {
                              onDateClick(x);
                            } else {
                              onPickMonth(x);
                            }
                          }
                        }}
                        className={theme.monthPickValueCell()}
                      >
                        <div
                          className={theme.monthPickValueCellInner({
                            isSameMonth: _isSameMonth,
                            isDisabled: _isDisabled,
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
                    const _isDisabled = x ? disabledDateProp?.(x) : false;
                    return (
                      <td
                        key={i}
                        onClick={() => {
                          if (!_isDisabled) {
                            if (modeProp === "year") {
                              onDateClick(x);
                            } else {
                              onPickYear(x);
                            }
                          }
                        }}
                        className={theme.yearPickValueCell()}
                      >
                        <div
                          className={theme.yearPickValueCellInner({
                            isSameYear: _isSameYear,
                            isDisabled: _isDisabled,
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
