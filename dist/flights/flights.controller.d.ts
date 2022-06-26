import { FlightService } from './flights.service';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    bookFlight(from: string, to: string, date: string, seats: number, flightNumber: string, isBooked: boolean, paymentStatus: string): Promise<{
        uid: string;
        resID: String;
        bookingStatus: string;
    }>;
    cancelFlight(id: string): Promise<"Booking cancelled!" | "Booking not found!">;
    getBookingList(bookingStatus: string): Promise<{
        id: String;
        from: String;
        to: String;
        date: String;
        seats: Number;
        flightNumber: String;
        isBooked: Boolean;
        bookingStatus: String;
        paymentStatus: String;
    }[]>;
    getFlightAvailability(flightNumber: string): Promise<{
        flightNumber: String;
        seats: Number;
    }[]>;
    getUserBookings(id: string): Promise<any>;
}
