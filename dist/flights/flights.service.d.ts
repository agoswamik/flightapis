import { BookFlight, BookingList, FlightAvailabilityList } from './flights.model';
export declare class FlightService {
    flights: BookFlight[];
    getbooklist: BookingList[];
    flightAvList: FlightAvailabilityList[];
    bookFlight(from: string, to: string, date: string, seats: number, flightNumber: string, isBooked: boolean, bookingStatus: string, paymentStatus: string): void;
    cancelFlight(id: string): void;
    getbookingList(bookingStatus: string): BookingList[];
    getFlightAvailability(flightNumber: string): FlightAvailabilityList[];
    getUserBookings(id: string): BookFlight[];
}
