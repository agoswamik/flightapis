import mongoose from "mongoose";
import { flight_ids, myMongoUrl } from "src/app.controller";
import { FlightStatus } from "src/Schemas/Flight_Schema";
import { User } from "src/Schemas/User_Schema";

export class UserController{
    updateUser(userId: string, no_of_seats: number) {
        no_of_seats = no_of_seats * (-1);
        mongoose.connect(myMongoUrl)
        User.updateOne({UserId: userId},
            {$inc: {No_of_seats: no_of_seats}}, function(err, res){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Done Updating Cancellation!");
                }
            }).clone();
    }
    deleteUser(userId: string): void {
        mongoose.connect(myMongoUrl);
        console.log(userId);
        User.deleteOne({UserId : userId}, function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log("User deleted!")
            }
        }).clone();
    }
    findUser(userId: string) {
        mongoose.connect(myMongoUrl);
        return new Promise(async (resolve, reject) => {
            const user_details =  User.find({UserId: userId}).clone();
            resolve(user_details);
          })
    }
    async addUser(Flightid: number, userName: string, no_of_seats: number, tripstatus: string, userid: string, price: number) {
        mongoose.connect(myMongoUrl);
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