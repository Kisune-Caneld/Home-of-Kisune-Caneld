"use client";

import { useState } from "react";
import { NotionCard } from "@/shared/components/NotionCard";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CalendarZoneProps {
  dict: {
    calendar: {
      title: string;
      today?: string;
      weekdays: string[];
      months: string[];
    };
  };
}

export function CalendarZone({ dict }: CalendarZoneProps) {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const firstDayOfMonth = new Date(year, month, 1);
  const startDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;
  const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];

  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    calendarDays.push({
      day,
      date: new Date(year, month - 1, day),
      isCurrentMonth: false,
    });
  }

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    calendarDays.push({
      day: i,
      date: new Date(year, month, i),
      isCurrentMonth: true,
    });
  }

  const remainingDays = 42 - calendarDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      day: i,
      date: new Date(year, month + 1, i),
      isCurrentMonth: false,
    });
  }

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  const monthName = dict.calendar.months.at(month) ?? "";

  return (
    <NotionCard
      headerIcon={<CalendarIcon className="h-4 w-4" />}
      title={dict.calendar.title}
      action={
        <div className="flex items-center rounded-lg border border-[#8dbbe3]/30 bg-[#f4f7fa] px-1 py-0.5 dark:border-[#8dbbe3]/20 dark:bg-[#0e2133]">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="p-1 text-[#66829d] transition-colors hover:text-[#24558a] dark:text-[#8dbbe3]/70 dark:hover:text-[#8dbbe3]"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="px-2 font-mono text-sm font-bold text-[#18324a] sm:text-sm dark:text-[#f0f7fc]">
            {monthName} {year}
          </span>
          <button
            type="button"
            onClick={handleNextMonth}
            className="p-1 text-[#66829d] transition-colors hover:text-[#24558a] dark:text-[#8dbbe3]/70 dark:hover:text-[#8dbbe3]"
            aria-label="Next month"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      }
    >
      <div className="w-full">
        <div className="grid grid-cols-7 gap-1.5 border-b border-[#dcecf8]/60 pb-2.5 text-center text-sm font-bold tracking-wider text-[#66829d] uppercase dark:border-[#13273d] dark:text-[#8dbbe3]/80">
          {dict.calendar.weekdays.map((weekday, idx) => (
            <div key={idx} className="py-1">
              {weekday}
            </div>
          ))}
        </div>

        <div className="mt-2.5 grid grid-cols-7 gap-1.5 text-center">
          {calendarDays.map((item, idx) => {
            const isToday = isSameDay(item.date, today);
            const isSelected = isSameDay(item.date, selectedDate);

            return (
              <button
                type="button"
                key={idx}
                onClick={() => setSelectedDate(item.date)}
                className={`flex h-10 items-center justify-center rounded-lg text-sm font-semibold transition-all sm:h-11 sm:text-sm ${
                  isToday
                    ? "bg-[#24558a] text-white shadow-xs dark:bg-[#1f3d5c] dark:text-white"
                    : isSelected
                      ? "border border-[#3f73b8] bg-[#dcecf8]/60 text-[#18324a] dark:border-[#60a5fa] dark:bg-[#1f3d5c]/60 dark:text-[#f0f7fc]"
                      : item.isCurrentMonth
                        ? "text-[#18324a] hover:bg-[#f4f7fa] dark:text-[#dcecf8] dark:hover:bg-[#0e2133]/70"
                        : "text-[#66829d]/40 hover:bg-[#f4f7fa]/50 dark:text-[#8dbbe3]/30 dark:hover:bg-[#0e2133]/30"
                }`}
              >
                <span>{item.day}</span>
              </button>
            );
          })}
        </div>
      </div>
    </NotionCard>
  );
}
