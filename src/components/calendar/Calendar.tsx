// "use client";

import { Booking, BookStatus } from "@/types/booking";
import { getDay } from "@/utils";
import clsx from "clsx";

interface CalendarProps {
  year: number;
  month: number;
  bookings: Booking[];
}

export function Calendar({ year, month, bookings }: CalendarProps) {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const date = new Date(year, month - 1);

  const monthDays: {
    id: string;
    isCurrentMonth: boolean;
    isActive: boolean;
    spotAvailable?: boolean;
    value: string;
    isToday?: boolean;
  }[][] = [[]];

  for (let i = 1; i < getDay(date); i++) {
    monthDays[0].push({
      id: Math.random().toString(36).substring(2),
      isCurrentMonth: false,
      isActive: false,
      value: "",
    });
  }
  while (date < new Date(year, month)) {
    if (getDay(date) === 1) {
      monthDays.push([]);
    }
    monthDays[monthDays.length - 1].push({
      id: Math.random().toString(36).substring(2),
      isCurrentMonth: true,
      value: String(date.getDate()),
      isActive: date.getDate() >= new Date().getDate(),
      isToday: date.getDate() === new Date().getDate(),
      spotAvailable: bookings.some(
        (booking) =>
          booking.year === year &&
          booking.month === month &&
          booking.date === date.getDate() &&
          booking.status === BookStatus.AVAILABLE
      ),
    });

    date.setDate(date.getDate() + 1);
  }

  for (let i = getDay(date); i <= 7; i++) {
    monthDays[monthDays.length - 1].push({
      id: Math.random().toString(36).substring(2),
      isCurrentMonth: false,
      isActive: false,
      value: "",
    });
  }

  return (
    <table className="h-full w-full">
      <tbody>
        <tr>
          {days.map((day) => (
            <th key={day} className="text-[#455a64] text-sm sm:text-lg">
              {day}
            </th>
          ))}
        </tr>

        {monthDays.map((row) => (
          <tr key={Math.random().toString(36)}>
            {row.map((day) => (
              <td
                key={day.id}
                className={clsx("rounded-md w-[14.28%] h-[14.28%]", {
                  "border border-solid border-blue-300": day.isToday,
                  "text-gray-400 cursor-not-allowed": !day.isActive,
                  "bg-gray-500 cursor-not-allowed": !day.spotAvailable && day.isActive,
                })}
              >
                {day.value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
