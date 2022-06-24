import mongoose from "mongoose";
export interface IUser {
    Name: string;
    UserId: number;
    Booking_Status: string;
    FlightId: number;
    Flight_name: string;
    No_of_seats: number;
    Total_Cost: number;
    Trips: string;
}
export declare const FlightStatusSchema: mongoose.Schema<IUser, mongoose.Model<IUser, any, any, any, any>, {}, {}, any, {}, "type", IUser>;
export declare const User: mongoose.Model<IUser, {}, {}, {}, any>;
