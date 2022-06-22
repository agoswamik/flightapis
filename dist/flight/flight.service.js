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
const uuid_1 = require("uuid");
let FlightService = class FlightService {
    constructor() {
        this.flight = [];
    }
    bookFlight(from, to, date, price, seats, company) {
        let myuuid = (0, uuid_1.v4)();
        const newFlight = new flight_model_1.Flight(myuuid, from, to, date, price, seats, company);
        this.flight.push(newFlight);
    }
    cancelFlight(id) {
        const index = this.flight.findIndex(item => String(item.id) === id);
        this.flight.splice(index, 1);
    }
    getBookingList() {
        return [...this.flight];
    }
    getFlightAvailability(from, to, date, company) {
        const index = this.flight.findIndex(item => item.from === from && item.to === to && item.date === date && item.company === company);
        return this.flight[index];
    }
    getUserBooking(id) {
        const index = this.flight.findIndex(item => String(item.id) === id);
        return this.flight[index];
    }
};
FlightService = __decorate([
    (0, common_1.Injectable)()
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map