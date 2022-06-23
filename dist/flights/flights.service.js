"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightService = void 0;
const common_1 = require("@nestjs/common");
const flights_model_1 = require("./flights.model");
let FlightService = class FlightService {
    constructor() {
        this.flights = [];
    }
    bookFlight(from, to, date, seats, flightNumber, isBooked, bookingStatus, paymentStatus) {
        let uid = Math.random().toString(26).slice(2);
        const newflight = new flights_model_1.BookFlight(uid, from, to, date, seats, flightNumber, isBooked, bookingStatus, paymentStatus);
        this.flights.push(newflight);
    }
    cancelFlight(id) {
        const index = this.flights.findIndex(flight => flight.id === id);
        this.flights.splice(index, 1);
    }
    getbookingList(bookingStatus) {
        const bookingList = this.getbooklist.filter(flight => flight.bookingStatus === bookingStatus);
        return bookingList;
    }
    getFlightAvailability(flightNumber) {
        const availableFlights = this.flightAvList.filter(flight => flight.flightNumber === flightNumber);
        return availableFlights;
    }
    getUserBookings(id) {
        const userBookings = this.flights.filter(flight => flight.id === id);
        return userBookings;
    }
};
FlightService = __decorate([
    (0, common_1.Injectable)()
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flights.service.js.map