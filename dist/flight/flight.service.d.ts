import { Flight } from './flight.model';
import { Model } from 'mongoose';
export declare class FlightService {
    private readonly flightModel;
    private flight;
    constructor(flightModel: Model<Flight>);
    bookFlight(from: string, to: string, date: string, price: number, seats: number, company: string): Promise<number>;
    cancelFlight(flightId: string): Promise<void>;
    getBookingList(): Promise<{
        id: number;
        from: string;
        to: string;
        price: number;
        seats: number;
        date: string;
        company: string;
    }[]>;
    getFlightAvailability(from: string, to: string, date: string, company: string): Promise<Flight>;
    getUserBooking(id: string): Promise<Flight>;
    private findID;
}
