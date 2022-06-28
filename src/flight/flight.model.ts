import * as mongoose from "mongoose";

export const FlightSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    from: { type: String, required: true},
    to: { type: String, required: true},
    date: { type: String, required: true},
    price: { type: Number, required: true },
    seats: { type: Number, required: true },
    company: { type: String, required: true},
});


export interface Flight extends mongoose.Document{
     id: number;
     from: string;
     to: string;
     date: string;
     price: number;
     seats: number;
     company: string;
}