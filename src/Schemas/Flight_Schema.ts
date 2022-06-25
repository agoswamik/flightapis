
import mongoose, { model, Schema } from "mongoose";

export interface IFlight {
    Name: string;
    FlightId: number;
    No_of_seats: number;
    Price: number;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  export const FlightStatusSchema = new Schema<IFlight>({
    Name: { type: String, required: true },
    FlightId: { type: Number, required: true },
    No_of_seats: { type: Number, required: true },
    Price: { type: Number, required: true }
  });
  
  // 3. Create a Model.
  export const FlightStatus = model<IFlight>('Flight-Status', FlightStatusSchema);
 