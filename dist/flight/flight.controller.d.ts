import { FlightService } from "./flight.service";
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    bookFlight(flightFrom: string, flightTo: string, flightDate: string, flightPrice: number, flightSeats: number, flightCompany: string): Promise<{
        id: number;
    }>;
    cancelFlight(id: string): Promise<any>;
    getBookingList(): Promise<{
        id: number;
        from: string;
        to: string;
        price: number;
        seats: number;
        date: string;
        company: string;
    }[]>;
    getFlightAvailability(from: string, to: string, date: string, company: string): any;
    getUserBooking(id: string): any;
}
