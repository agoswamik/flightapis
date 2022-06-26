"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightAvailabilityListSchema = exports.BookingListSchema = exports.BookFlightSchema = void 0;
const mongoose = require("mongoose");
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
});
exports.BookFlightSchema = BookFlightSchema;
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
});
exports.BookingListSchema = BookingListSchema;
const FlightAvailabilityListSchema = new mongoose.Schema({
    flightNumber: String,
    seats: Number,
});
exports.FlightAvailabilityListSchema = FlightAvailabilityListSchema;
//# sourceMappingURL=flights.model.js.map