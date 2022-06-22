import { FlightService } from "./flight.service";
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    bookFlight(flightFrom: string, flightTo: string, flightDate: string, flightPrice: number, flightSeats: number, flightCompany: string): any;
    cancelFlight(id: string): any;
    getBookingList(): any;
    getFlightAvailability(from: string, to: string, date: string, company: string): any;
    getUserBooking(id: string): any;
}
