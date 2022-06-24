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
const flight_service_1 = require("./flight.service");
let FlightController = class FlightController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    bookFlight(flightFrom, flightDestination, flightDate, flightPrice, flightSeats, flightNo, seatNo) {
        this.flightService.bookFlight(flightFrom, flightDestination, flightDate, flightPrice, flightSeats, flightNo, seatNo);
    }
    cancelFlight(id) {
        this.flightService.cancelFlight(id);
        return "Your flight has been cancelled";
    }
    getFlight(id) {
        return this.flightService.getSingleFlight(id);
    }
    getBookingList() {
        return this.flightService.getBookingList();
    }
    getFlightAvailability(from, to, date, flightno) {
        return this.flightService.getFlightAvailability(from, to, date, flightno);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('from')),
    __param(1, (0, common_1.Body)('destination')),
    __param(2, (0, common_1.Body)('date')),
    __param(3, (0, common_1.Body)('price')),
    __param(4, (0, common_1.Body)('seats')),
    __param(5, (0, common_1.Body)('flightno')),
    __param(6, (0, common_1.Body)('seatno')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number, String, Number]),
    __metadata("design:returntype", Object)
], FlightController.prototype, "bookFlight", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], FlightController.prototype, "cancelFlight", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "getFlight", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FlightController.prototype, "getBookingList", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)('from')),
    __param(1, (0, common_1.Body)('to')),
    __param(2, (0, common_1.Body)('date')),
    __param(3, (0, common_1.Body)('flightno')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Object)
], FlightController.prototype, "getFlightAvailability", null);
FlightController = __decorate([
    (0, common_1.Controller)('flight'),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightController);
exports.FlightController = FlightController;
//# sourceMappingURL=flight.controller.js.map