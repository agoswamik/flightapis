import mongoose, { model, Schema } from "mongoose";
import { myMongoUrl } from "src/app.controller";
import { FlightStatus } from "src/Schemas/Flight_Schema";
export class getFlightInfo{
    findFlight(Flightid: number, flight_ids: any) {
      var flight_name = flight_ids[Flightid];
      mongoose.connect(myMongoUrl);
      return new Promise(async (resolve, reject) => {
        const flight_details =  FlightStatus.find({Name: flight_name}).clone();
        resolve(flight_details);
      })
    }
    getSeatInfo():any{
        mongoose.connect(myMongoUrl);
          return new Promise(async (resolve, reject) => {
            const flight_details = FlightStatus.find({}).clone();
            var Seat_array = this.filter_seats(await flight_details.clone());
            resolve(Seat_array);
          })
    }
    filter_seats(flight_details: Array<any>){
      var result = [];
      for(var i=0; i<flight_details.length; i++){
        var flight = {Name: (flight_details[i]).Name,
                      No_of_seats: (flight_details[i]).No_of_seats,
                    FlightId: (flight_details[i]).FlightId};
        result.push(flight);
      }
      return result;
    }
}