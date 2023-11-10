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
  sub,
  subDays,
} from "date-fns";
import { useCallback, useMemo, useState } from "react";

const FIRST_DAY_OF_WEEK = 1; // 1 is Monday, 0 is Sunday

interface IUseCalendar {
  labelFormat?: string;
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

export const useCalendar = ({ labelFormat = "EEEEEE" }: IUseCalendar = {}) => {
  const [current, setCurrent] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>();
  console.log("selectedDate", selectedDate);

  const getMDates = useCallback(
    (current: Date) => {
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
    },
    [current]
  );

  const getMDateLabels = useCallback(
    (current: Date) => {
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
    },
    [current]
  );

  const onMPrevMonth = () => {
    setCurrent((prev) => sub(prev, { months: 1 }));
  };

  const onMNextMonth = () => {
    setCurrent((prev) => add(prev, { months: 1 }));
  };

  const onMPrevYear = () => {
    setCurrent((prev) => sub(prev, { years: 1 }));
  };

  const onMNextYear = () => {
    setCurrent((prev) => add(prev, { years: 1 }));
  };

  const onMSelectDate = (date: Date) => {
    setSelectedDate(date);
    if (
      isSameMonth(
        sub(current, {
          months: 1,
        }),
        date
      )
    ) {
      onMPrevMonth();
    }
    if (
      isSameMonth(
        add(current, {
          months: 1,
        }),
        date
      )
    ) {
      onMNextMonth();
    }
  };

  const m_dateLabels = useMemo(() => getMDateLabels(current), [current]);
  const m_dates = useMemo(() => getMDates(current), [current]);

  return {
    current,
    selectedDate,
    m_onSelectDate: onMSelectDate,
    m_dateLabels,
    m_dates,
    m_onPrevMonth: onMPrevMonth,
    m_onNextMonth: onMNextMonth,
    m_onPrevYear: onMPrevYear,
    m_onNextYear: onMNextYear,
  };
};
