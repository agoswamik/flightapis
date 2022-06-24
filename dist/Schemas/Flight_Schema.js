"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightStatus = exports.FlightStatusSchema = void 0;
const mongoose_1 = require("mongoose");
exports.FlightStatusSchema = new mongoose_1.Schema({
    Name: { type: String, required: true },
    No_of_seats: { type: Number, required: true },
    Price: { type: Number, required: true }
});
exports.FlightStatus = (0, mongoose_1.model)('Flight-Status', exports.FlightStatusSchema);
//# sourceMappingURL=Flight_Schema.js.map