import { Flight } from "./flight.model";
export declare class FlightService {
    flight: Flight[];
    bookFlight(from: string, to: string, date: string, price: number, seats: number, company: string): void;
    cancelFlight(id: string): void;
    getBookingList(): Flight[];
    getFlightAvailability(from: string, to: string, date: string, company: string): Flight;
    getUserBooking(id: string): Flight;
}
