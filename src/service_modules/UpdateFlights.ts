import mongoose, { model, Schema } from "mongoose";
import { FlightStatus } from "src/Schemas/Flight_Schema";

export class UpdateFlights{
    updateCancelSeats(FlightId: any, no_of_seats: number) {
        mongoose.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        
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
        mongoose.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        var no_of_seats = req_user.No_of_seats;
        var Flight_name = req_user.Flight_name;
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
        mongoose.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        
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

