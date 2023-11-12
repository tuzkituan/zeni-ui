import {
  add,
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  startOfYear,
  sub,
  subDays,
} from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { ICalendarViewMode } from "./calendar.types";

const FIRST_DAY_OF_WEEK = 0; // 1 is Monday, 0 is Sunday

interface IUseCalendar {
  labelFormat?: string;
  initialSelectedDate?: Date;
}

const getDayOfWeekNumber = (date: Date): number => {
  const dayOfWeek = getDay(date);
  // Convert Sunday (0) to 7 and shift other days by 1
  return dayOfWeek;
};

const getDatesInRange = (startDate: Date, endDate: Date): Date[] => {
  const datesInRange = eachDayOfInterval({ start: startDate, end: endDate });
  return datesInRange;
};

const getPrevMonthDates = (startDate: Date, numberOfDays: number): Date[] => {
  const previousDates: Date[] = [];

  for (let i = 1; i <= numberOfDays; i++) {
    const currentDate = subDays(startDate, i);
    previousDates.push(currentDate);
  }

  return previousDates.reverse(); // If you want the dates in ascending order, remove this line
};

const getNextMonthDates = (startDate: Date, numberOfDays: number): Date[] => {
  const nextMonthStartDate = startOfMonth(addMonths(startDate, 1));
  const nextMonthDates: Date[] = [];

  for (let i = 0; i < numberOfDays; i++) {
    const currentDate = addDays(nextMonthStartDate, i);
    nextMonthDates.push(currentDate);
  }

  return nextMonthDates;
};

export const useCalendar = ({
  labelFormat = "EEEEEE",
  initialSelectedDate,
}: IUseCalendar = {}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [viewMode, setViewMode] = useState<ICalendarViewMode>("day");

  const getCurrentMonthDates = (current: Date) => {
    const _all: Date[] = [];
    const _start = startOfMonth(current);
    const _end = endOfMonth(current);

    const _mains: Date[] = getDatesInRange(_start, _end);
    const startNumber = getDayOfWeekNumber(_start);

    const _prevs = getPrevMonthDates(_start, startNumber - FIRST_DAY_OF_WEEK);
    _all.push(..._prevs);
    _all.push(..._mains);

    const moreCellNumber = 7 * 6 - _all.length;
    const _nexts = getNextMonthDates(_start, moreCellNumber);
    _all.push(..._nexts);

    return _all;
  };

  const getMonthList = (current: Date) => {
    const months: Date[] = [];

    for (let i = 0; i < 12; i++) {
      const currentMonth = startOfMonth(new Date(current.getFullYear(), i, 1));
      months.push(currentMonth);
    }

    return months;
  };

  const getDecadeYearList = (current: Date) => {
    const currentYear = new Date(current).getFullYear();
    const startYear = currentYear - 4;
    const endYear = currentYear + 8;
    const years: Date[] = [];

    for (let year = startYear; year < endYear; year++) {
      const firstDayOfYear = startOfYear(new Date(year, 0, 1));
      years.push(firstDayOfYear);
    }

    return years;
  };

  const getWeekdayList = (current: Date) => {
    const startOfWeekDate = startOfWeek(current, {
      weekStartsOn: FIRST_DAY_OF_WEEK,
    });
    const daysOfWeekText: string[] = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = addDays(startOfWeekDate, i);
      const formattedDate = format(currentDate, labelFormat);
      daysOfWeekText.push(formattedDate);
    }

    return daysOfWeekText;
  };

  const onPrevMonth = () => {
    setCurrentDate((prev) => sub(prev, { months: 1 }));
  };

  const onNextMonth = () => {
    setCurrentDate((prev) => add(prev, { months: 1 }));
  };

  const onPrevYear = () => {
    setCurrentDate((prev) => sub(prev, { years: 1 }));
  };

  const onNextYear = () => {
    setCurrentDate((prev) => add(prev, { years: 1 }));
  };

  const onPrevDecade = () => {
    setCurrentDate((prev) => sub(prev, { years: 12 }));
  };

  const onNextDecade = () => {
    setCurrentDate((prev) => add(prev, { years: 12 }));
  };

  const onSelectDate = (date: Date) => {
    setSelectedDate(date);
    if (
      isSameMonth(
        sub(currentDate, {
          months: 1,
        }),
        date
      )
    ) {
      onPrevMonth();
    }
    if (
      isSameMonth(
        add(currentDate, {
          months: 1,
        }),
        date
      )
    ) {
      onNextMonth();
    }
  };

  const onPickMonth = (date: Date) => {
    setCurrentDate(date);
    setViewMode("day");
  };

  const onPickYear = (date: Date) => {
    setCurrentDate(date);
    setViewMode("month");
  };

  const weekdayList = useMemo(() => getWeekdayList(currentDate), [currentDate]);
  const currentMonthDateList = useMemo(
    () => getCurrentMonthDates(currentDate),
    [currentDate]
  );
  const monthList = useMemo(() => getMonthList(currentDate), [currentDate]);
  const decadeYearList = useMemo(
    () => getDecadeYearList(currentDate),
    [currentDate]
  );

  useEffect(() => {
    if (initialSelectedDate) {
      setCurrentDate(initialSelectedDate);
      setSelectedDate(initialSelectedDate);
    }
  }, [initialSelectedDate]);

  return {
    viewMode,
    setViewMode,
    currentDate,
    selectedDate,
    onSelectDate,
    // viewMode: day
    weekdayList,
    currentMonthDateList,
    // view mode: month
    monthList,
    decadeYearList,
    // functions
    onPrevMonth,
    onNextMonth,
    onPrevYear,
    onNextYear,
    onPrevDecade,
    onNextDecade,
    // on pick month & year
    onPickMonth,
    onPickYear,
  };
};
