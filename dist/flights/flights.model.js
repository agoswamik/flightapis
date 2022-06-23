"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightAvailabilityList = exports.BookingList = exports.BookFlight = void 0;
class BookFlight {
    constructor(id, from, to, date, seats, flightNumber, isBooked, paymentStatus, bookingStatus) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.date = date;
        this.seats = seats;
        this.flightNumber = flightNumber;
        this.isBooked = isBooked;
        this.paymentStatus = paymentStatus;
        this.bookingStatus = bookingStatus;
    }
}
exports.BookFlight = BookFlight;
class BookingList {
    constructor(isBookingSuccess, bookingStatus, bookingId, bookingDate, flightNumber, departureAirport, arrivalAirport, departureDate, arrivalDate, airfarecharges, taxes, totalAmount) {
        this.isBookingSuccess = isBookingSuccess;
        this.bookingStatus = bookingStatus;
        this.bookingId = bookingId;
        this.bookingDate = bookingDate;
        this.flightNumber = flightNumber;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.airfarecharges = airfarecharges;
        this.taxes = taxes;
        this.totalAmount = totalAmount;
    }
}
exports.BookingList = BookingList;
class FlightAvailabilityList {
    constructor(flightNumber, seats) {
        this.flightNumber = flightNumber;
        this.seats = seats;
    }
}
exports.FlightAvailabilityList = FlightAvailabilityList;
//# sourceMappingURL=flights.model.js.map