import { BookFlight, BookingList, FlightAvailabilityList } from './flights.model';
import { Model } from 'mongoose';
export declare class FlightService {
    private readonly flightModel;
    private readonly FlightAvailabilityListModel;
    flights: BookFlight[];
    getbooklist: BookingList[];
    flightAvList: FlightAvailabilityList[];
    constructor(flightModel: Model<BookFlight>, FlightAvailabilityListModel: Model<FlightAvailabilityList>);
    bookFlight(from: string, to: string, date: string, seats: number, flightNumber: string, isBooked: boolean, paymentStatus: string): Promise<{
        uid: string;
        resID: String;
        bookingStatus: string;
    }>;
    cancelFlight(id: string): Promise<"Booking cancelled!" | "Booking not found!">;
    getbookingList(bookingStatus: string): Promise<{
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
