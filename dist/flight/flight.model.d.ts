import * as mongoose from "mongoose";
export declare const FlightSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    id: number;
    date: string;
    from: string;
    to: string;
    price: number;
    seats: number;
    company: string;
}>;
export interface Flight extends mongoose.Document {
    id: number;
    from: string;
    to: string;
    date: string;
    price: number;
    seats: number;
    company: string;
}
