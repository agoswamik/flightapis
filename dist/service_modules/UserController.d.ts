import mongoose from "mongoose";
export declare class UserController {
    addUser(Flightid: number, userName: string, no_of_seats: number, tripstatus: string, userid: number, price: number): Promise<mongoose.Document<unknown, any, mongoose.MergeType<import("src/Schemas/User_Schema").IUser, {
        Name: string;
        UserId: number;
        Booking_Status: string;
        FlightId: number;
        Flight_name: any;
        No_of_seats: number;
        Total_Cost: number;
        Trips: string;
    }>> & Omit<import("src/Schemas/User_Schema").IUser, "Name" | "UserId" | "Booking_Status" | "FlightId" | "Flight_name" | "No_of_seats" | "Total_Cost" | "Trips"> & {
        Name: string;
        UserId: number;
        Booking_Status: string;
        FlightId: number;
        Flight_name: any;
        No_of_seats: number;
        Total_Cost: number;
        Trips: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }>;
}
