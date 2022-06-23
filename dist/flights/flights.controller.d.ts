import { FlightService } from './flights.service';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    bookFlight(from: string, to: string, date: string, seats: number, flightNumber: string, isBooked: boolean, bookingStatus: string, paymentStatus: string): void;
}
