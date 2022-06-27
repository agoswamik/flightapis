import { FlightService } from './flight.service';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    bookFlight(flightTo: string, flightFrom: string, flightPrice: number, flightDate: string, flightSeats: number): any;
}
