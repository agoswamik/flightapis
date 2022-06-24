import mongoose from "mongoose";
export interface IFlight {
    Name: string;
    No_of_seats: number;
    Price: number;
}
export declare const FlightStatusSchema: mongoose.Schema<IFlight, mongoose.Model<IFlight, any, any, any, any>, {}, {}, any, {}, "type", IFlight>;
export declare const FlightStatus: mongoose.Model<IFlight, {}, {}, {}, any>;
