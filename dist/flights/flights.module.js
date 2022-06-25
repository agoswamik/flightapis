"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightModule = void 0;
const common_1 = require("@nestjs/common");
const flights_controller_1 = require("./flights.controller");
const flights_service_1 = require("./flights.service");
const mongoose_1 = require("@nestjs/mongoose");
const flights_model_1 = require("./flights.model");
let FlightModule = class FlightModule {
};
FlightModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: 'BookFlight', schema: flights_model_1.BookFlightSchema },
                { name: 'BookingList', schema: flights_model_1.BookingListSchema },
                { name: 'FlightAvailabilityList', schema: flights_model_1.FlightAvailabilityListSchema },
            ])],
        controllers: [flights_controller_1.FlightController],
        providers: [flights_service_1.FlightService],
    })
], FlightModule);
exports.FlightModule = FlightModule;
//# sourceMappingURL=flights.module.js.map