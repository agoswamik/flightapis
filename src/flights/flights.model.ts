import * as mongoose from "mongoose";

const BookFlightSchema = new mongoose.Schema({
    id: String,
    from: String,
    to: String,
    date: String,
    seats: Number,
    flightNumber: String,
    isBooked: Boolean,
    paymentStatus: String,
    bookingStatus: String,
})

interface BookFlight extends mongoose.Document{
    id: String,
    from: String,
    to: String,
    date: String,
    seats: Number,
    flightNumber: String,
    isBooked: Boolean,
    paymentStatus: String,
    bookingStatus: String,
}

const BookingListSchema = new mongoose.Schema({
    isBookingSuccess: Boolean,
    bookingStatus: String,
    bookingId: String,
    bookingDate: String,
    flightNumber: String,
    departureAirport: String,
    arrivalAirport: String,
    departureDate: String,
    arrivalDate: String,
    airfarecharges: Number,
    taxes: Number,
    totalAmount: Number,
})

interface BookingList extends mongoose.Document{
    isBookingSuccess: Boolean,
    bookingStatus: String,
    bookingId: String,
    bookingDate: String,
    flightNumber: String,
    departureAirport: String,
    arrivalAirport: String,
    departureDate: String,
    arrivalDate: String,
    airfarecharges: Number,
    taxes: Number,
    totalAmount: Number,
}

const FlightAvailabilityListSchema = new mongoose.Schema({
    flightNumber: String,
    seats: Number,
})

interface FlightAvailabilityList extends mongoose.Document{
    flightNumber: String,
    seats: Number,
}


export { 
    BookFlightSchema, 
    BookingListSchema, 
    FlightAvailabilityListSchema,
    BookFlight,
    BookingList,
    FlightAvailabilityList, 
};