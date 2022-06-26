"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const flights_service_1 = require("./flights.service");
let FlightController = class FlightController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    async bookFlight(from, to, date, seats, flightNumber, isBooked, paymentStatus) {
        const res = await this.flightService.bookFlight(from, to, date, seats, flightNumber, isBooked, paymentStatus);
        return res;
    }
    async cancelFlight(id) {
        const res = this.flightService.cancelFlight(id);
        return res;
    }
    getBookingList(bookingStatus) {
        const res = this.flightService.getbookingList(bookingStatus);
        return res;
    }
    getFlightAvailability(flightNumber) {
        const res = this.flightService.getFlightAvailability(flightNumber);
        return res;
    }
    getUserBookings(id) {
        const res = this.flightService.getUserBookings(id);
        return res;
    }
};
__decorate([
    (0, common_1.Post)('bookflight'),
    __param(0, (0, common_1.Body)('from')),
    __param(1, (0, common_1.Body)('to')),
    __param(2, (0, common_1.Body)('date')),
    __param(3, (0, common_1.Body)('seats')),
    __param(4, (0, common_1.Body)('flightNumber')),
    __param(5, (0, common_1.Body)('isBooked')),
    __param(6, (0, common_1.Body)('paymentStatus')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, String, Boolean, String]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "bookFlight", null);
__decorate([
    (0, common_1.Post)('cancelflight'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "cancelFlight", null);
__decorate([
    (0, common_1.Post)('getbookinglist'),
    __param(0, (0, common_1.Body)('bookingStatus')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "getBookingList", null);
__decorate([
    (0, common_1.Post)('getflightavailability'),
    __param(0, (0, common_1.Body)('flightNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "getFlightAvailability", null);
__decorate([
    (0, common_1.Post)('getuserbookings'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "getUserBookings", null);
FlightController = __decorate([
    (0, common_1.Controller)('flights'),
    __metadata("design:paramtypes", [flights_service_1.FlightService])
], FlightController);
exports.FlightController = FlightController;
//# sourceMappingURL=flights.controller.js.map