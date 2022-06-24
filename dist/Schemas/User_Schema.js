"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.FlightStatusSchema = void 0;
const mongoose_1 = require("mongoose");
exports.FlightStatusSchema = new mongoose_1.Schema({
    Name: { type: String, required: true },
    UserId: { type: Number, required: true },
    Booking_Status: { type: String, default: "Confirmed" },
    FlightId: { type: Number, required: true },
    Flight_name: { type: String, required: true },
    No_of_seats: { type: Number, required: true },
    Total_Cost: { type: Number, required: true },
    Trips: { type: String, required: true, default: "Up" }
});
exports.User = (0, mongoose_1.model)('User', exports.FlightStatusSchema);
//# sourceMappingURL=User_Schema.js.map