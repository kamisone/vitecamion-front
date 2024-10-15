import { Booking } from "@/types/booking";
import { ListResponseType } from "@/types/http";
import { HttpService } from "./http.service";

const httpService = HttpService.instance;

export class BookingService {
  private static _instance: BookingService;

  static get instance() {
    if (!this._instance) {
      this._instance = new BookingService();
    }

    return this._instance;
  }

  list(): Promise<ListResponseType<Booking>> {
    return httpService.get({ path: "booking" });
  }
}
