export interface Booking {
  year: number;

  month: number;

  date: number;

  startHour: number;

  startMinute: number;

  endHour: number;

  endMinute: number;

  userName: string | null;

  userPhone: string | null;

  userAddress: string | null;

  status: BookStatus;
}

export enum BookStatus {
  AVAILABLE = "available",
  BOOKED = "booked",
}
