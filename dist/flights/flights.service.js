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
exports.FlightService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FlightService = class FlightService {
    constructor(flightModel, FlightAvailabilityListModel) {
        this.flightModel = flightModel;
        this.FlightAvailabilityListModel = FlightAvailabilityListModel;
        this.flights = [];
    }
    async bookFlight(from, to, date, seats, flightNumber, isBooked, paymentStatus) {
        let uid = Math.random().toString(26).slice(2);
        let bookingStatus = 'NotConfirmed';
        if (paymentStatus === 'Paid')
            bookingStatus = 'Confirmed';
        else if (paymentStatus === 'NotPaid' || paymentStatus === 'Cancelled' || paymentStatus === 'DeniedByBank' || paymentStatus === 'Failed') {
            bookingStatus = 'NotConfirmed';
        }
        const newBooking = new this.flightModel({ uid, from, to, date, seats, flightNumber, isBooked, bookingStatus, paymentStatus });
        const res = await newBooking.save();
        return { uid: uid, resID: res.id, bookingStatus: bookingStatus };
    }
    async cancelFlight(id) {
        try {
            await this.flightModel.findByIdAndDelete(id);
            return "Booking cancelled!";
        }
        catch (error) {
            return "Booking not found!";
        }
    }
    async getbookingList(bookingStatus) {
        const getBooking = await this.flightModel.find({ bookingStatus: bookingStatus }).exec();
        return getBooking.map(item => ({
            id: item.id,
            from: item.from,
            to: item.to,
            date: item.date,
            seats: item.seats,
            flightNumber: item.flightNumber,
            isBooked: item.isBooked,
            bookingStatus: item.bookingStatus,
            paymentStatus: item.paymentStatus,
        }));
    }
    async getFlightAvailability(flightNumber) {
        const getFlightAv = await this.FlightAvailabilityListModel.find({ flightNumber: flightNumber }).exec();
        return getFlightAv.map(item => ({
            flightNumber: item.flightNumber,
            seats: item.seats,
        }));
    }
    async getUserBookings(id) {
        let getUserBookings;
        try {
            getUserBookings = await this.flightModel.find({ uid: id }).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Booking not found for this user!');
        }
        return getUserBookings.map(item => ({
            id: item.id,
            from: item.from,
            to: item.to,
            date: item.date,
            seats: item.seats,
            flightNumber: item.flightNumber,
            isBooked: item.isBooked,
            bookingStatus: item.bookingStatus,
            paymentStatus: item.paymentStatus,
        }));
    }
};
FlightService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('BookFlight')),
    __param(1, (0, mongoose_1.InjectModel)('FlightAvailabilityList')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flights.service.js.map