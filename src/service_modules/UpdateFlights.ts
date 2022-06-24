import mongoose, { model, Schema } from "mongoose";
import { FlightStatus } from "src/Schemas/Flight_Schema";

export class UpdateFlights{
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

