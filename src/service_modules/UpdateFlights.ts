import mongoose, { model, Schema } from "mongoose";
import { FlightStatusSchema, IFlight } from "src/Schema_database"; 
export class UpdateFlights{
    updateBookFlight(Flightid: number, no_of_seats: number, flight_ids: any): boolean {
        var flight_name = flight_ids[Flightid];
        console.log(flight_name);
        
        return false;
    }

}