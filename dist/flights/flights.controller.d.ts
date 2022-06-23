import { BookFlight, BookingList, FlightAvailabilityList } from './flights.model';
import { FlightService } from './flights.service';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    bookFlight(from: string, to: string, date: string, seats: number, flightNumber: string, isBooked: boolean, bookingStatus: string, paymentStatus: string): void;
    cancelFlight(id: string): void;
    getBookingList(bookingStatus: string): BookingList[];
    getFlightAvailability(flightNumber: string): FlightAvailabilityList[];
    getUserBookings(id: string): BookFlight[];
}
