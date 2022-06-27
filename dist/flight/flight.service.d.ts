import { Flight } from './flight.model';
export declare class FlightService {
    flight: Flight[];
    bookFlight(to: string, from: string, price: number, date: string, seats: number): string;
}
