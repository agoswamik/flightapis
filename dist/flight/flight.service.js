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
const uuid_1 = require("uuid");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FlightService = class FlightService {
    constructor(flightModel) {
        this.flightModel = flightModel;
        this.flight = [];
    }
    async bookFlight(from, to, date, price, seats, company) {
        let myuuid = (0, uuid_1.v4)();
        const newFlight = new this.flightModel({ myuuid, from, to, date, price, seats, company });
        const result = await newFlight.save();
        return result.id;
    }
    async cancelFlight(flightId) {
        await this.flightModel.deleteOne({ _id: flightId }).exec();
    }
    async getBookingList() {
        const flight = await this.flightModel.find().exec();
        return flight.map(item => ({
            id: item.id,
            from: item.from,
            to: item.to,
            price: item.price,
            seats: item.seats,
            date: item.date,
            company: item.company,
        }));
    }
    async getFlightAvailability(from, to, date, company) {
        const index = await this.flight.findIndex(item => item.from === from && item.to === to && item.date === date && item.company === company);
        const flight = this.flight[index];
        if (!flight) {
            throw new common_1.NotFoundException('Could not find');
        }
        return this.flight[index];
    }
    async getUserBooking(id) {
        const flight = await this.findID(id);
        return flight;
    }
    async findID(id) {
        let flight;
        try {
            flight = await this.flightModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find');
        }
        if (!flight) {
            throw new common_1.NotFoundException('Could not find');
        }
        return flight;
    }
};
FlightService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Flight')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map