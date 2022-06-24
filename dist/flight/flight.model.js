"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSchema = void 0;
const mongoose = require("mongoose");
exports.FlightSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    date: { type: String, required: true },
    price: { type: Number, required: true },
    seats: { type: Number, required: true },
    company: { type: String, required: true },
});
//# sourceMappingURL=flight.model.js.map