import * as mongoose from "mongoose";
declare const BookFlightSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    id?: string;
    from?: string;
    to?: string;
    date?: string;
    seats?: number;
    flightNumber?: string;
    isBooked?: boolean;
    paymentStatus?: string;
    bookingStatus?: string;
}>;
interface BookFlight extends mongoose.Document {
    id: String;
    from: String;
    to: String;
    date: String;
    seats: Number;
    flightNumber: String;
    isBooked: Boolean;
    paymentStatus: String;
    bookingStatus: String;
}
declare const BookingListSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    flightNumber?: string;
    bookingStatus?: string;
    isBookingSuccess?: boolean;
    bookingId?: string;
    bookingDate?: string;
    departureAirport?: string;
    arrivalAirport?: string;
    departureDate?: string;
    arrivalDate?: string;
    airfarecharges?: number;
    taxes?: number;
    totalAmount?: number;
}>;
interface BookingList extends mongoose.Document {
    isBookingSuccess: Boolean;
    bookingStatus: String;
    bookingId: String;
    bookingDate: String;
    flightNumber: String;
    departureAirport: String;
    arrivalAirport: String;
    departureDate: String;
    arrivalDate: String;
    airfarecharges: Number;
    taxes: Number;
    totalAmount: Number;
}
declare const FlightAvailabilityListSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    seats?: number;
    flightNumber?: string;
}>;
interface FlightAvailabilityList extends mongoose.Document {
    flightNumber: String;
    seats: Number;
}
export { BookFlightSchema, BookingListSchema, FlightAvailabilityListSchema, BookFlight, BookingList, FlightAvailabilityList, };
