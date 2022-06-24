import mongoose from "mongoose";
import { flight_ids } from "src/app.controller";
import { User } from "src/Schemas/User_Schema";

export class UserController{
    async addUser(Flightid: number, userName: string, no_of_seats: number, tripstatus: string, userid: number, price: number) {
        mongoose.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        const req_user = new User({
            Name: userName,
            UserId: userid,
            Booking_Status: "Confirmed",
            FlightId: Flightid,
            Flight_name: flight_ids[Flightid],
            No_of_seats: no_of_seats,
            Total_Cost: price,
            Trips: tripstatus
        })
        await req_user.save();
        console.log("User added!");
        return req_user;
    }

}