import { Flight } from "./flight.model";
export declare class FlightService {
    flight: Flight[];
    bookFlight(from: string, destination: string, date: string, price: number, seats: number, flightno: string, seatno: number): "flight not booked" | "flight booked";
    cancelFlight(id: string): void;
    findFlight(id: string): [Flight, number];
    getBookingList(): Flight[];
    getFlightAvailability(from: string, destination: string, date: string, flightno: string): Flight;
    getSingleFlight(flightId: string): {
        id: string;
        from: string;
        destination: string;
        date: string;
        price: number;
        seats: number;
        flightno: string;
        seatno: number;
    };
}
