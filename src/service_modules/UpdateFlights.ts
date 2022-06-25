import mongoose, { model, Schema } from "mongoose";
import { myMongoUrl } from "src/app.controller";
import { FlightStatus } from "src/Schemas/Flight_Schema";

export class UpdateFlights{
    updateCancelSeats(FlightId: any, no_of_seats: number) {
        mongoose.connect(myMongoUrl);
        
        FlightStatus.updateOne(
            {FlightId: FlightId},
            {$inc: {No_of_seats: no_of_seats}}, function(err, res){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Done updating flight seats!");
                }
            }).clone();
    
    }
     updateDeleteBooking(req_user: any):void {
        var no_of_seats = req_user.No_of_seats;
        var Flight_name = req_user.Flight_name;
        mongoose.connect(myMongoUrl);
        FlightStatus.updateOne({Name: Flight_name}, 
            {$inc: {No_of_seats: no_of_seats}}, function(err, res){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Done!");
                }
            }).clone();
    }
    updateBookFlight(flight_obj:any, no_of_seats: number): void {
        var result_seats = flight_obj.No_of_seats - no_of_seats;
        mongoose.connect(myMongoUrl);
        
        FlightStatus.updateOne(
            {Name: flight_obj.Name},
             {No_of_seats: result_seats}, function(error, result){
               if(error){
                console.log(error);
               }
               else{
                console.log("Updated successfully!")
               }
            }
            ).clone();

            }
        
    }

