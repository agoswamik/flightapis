declare class BookFlight {
    id: string;
    from: string;
    to: string;
    date: string;
    seats: number;
    flightNumber: string;
    isBooked: boolean;
    paymentStatus: string;
    bookingStatus: string;
    constructor(id: string, from: string, to: string, date: string, seats: number, flightNumber: string, isBooked: boolean, paymentStatus: string, bookingStatus: string);
}
declare class BookingList {
    isBookingSuccess: boolean;
    bookingStatus: string;
    bookingId: string;
    bookingDate: string;
    flightNumber: string;
    departureAirport: string;
    arrivalAirport: string;
    departureDate: string;
    arrivalDate: string;
    airfarecharges: number;
    taxes: number;
    totalAmount: number;
    constructor(isBookingSuccess: boolean, bookingStatus: string, bookingId: string, bookingDate: string, flightNumber: string, departureAirport: string, arrivalAirport: string, departureDate: string, arrivalDate: string, airfarecharges: number, taxes: number, totalAmount: number);
}
declare class FlightAvailabilityList {
    flightNumber: string;
    seats: number;
    constructor(flightNumber: string, seats: number);
}
export { BookFlight, BookingList, FlightAvailabilityList };
