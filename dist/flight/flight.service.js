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
const flight_model_1 = require("./flight.model");
let FlightService = class FlightService {
    constructor() {
        this.flight = [];
    }
    bookFlight(from, destination, date, price, seats, flightno, seatno) {
        let flightid = Math.random().toString();
        const newFlight = new flight_model_1.Flight(flightid, from, destination, date, price, seats, flightno, seatno);
        if (seatno > seats) {
            return "flight not booked";
        }
        else {
            this.flight.push(newFlight);
            return "flight booked";
        }
    }
    cancelFlight(id) {
        const index = this.flight.findIndex(item => String(item.id) === id);
        this.flight.splice(index, 1);
    }
    findFlight(id) {
        const flightIndex = this.flight.findIndex(item => String(item.id) === id);
        const flight = this.flight[flightIndex];
        if (!flight) {
            throw new common_1.NotFoundException('Could not find the flight.');
        }
        return [flight, flightIndex];
    }
    getBookingList() {
        return [...this.flight];
    }
    getFlightAvailability(from, destination, date, flightno) {
        const index = this.flight.findIndex(item => item.from === from && item.destination === destination && item.date === date && item.flightno === flightno);
        return this.flight[index];
    }
    getSingleFlight(flightId) {
        const flight = this.findFlight(flightId)[0];
        return Object.assign({}, flight);
    }
};
FlightService = __decorate([
    (0, common_1.Injectable)()
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map