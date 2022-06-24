// mongodb+srv://Romit1001:<password>@cluster0.3sbip.mongodb.net/?retryWrites=true&w=majority
import mongoose, { model, Schema } from "mongoose";
/* mongoose.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority'); */
export interface IFlight {
    Name: string;
    No_of_seats: number;
    Price: number;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  export const FlightStatusSchema = new Schema<IFlight>({
    Name: { type: String, required: true },
    No_of_seats: { type: Number, required: true },
    Price: { type: Number, required: true }
  });
  
  // 3. Create a Model.
  export const FlightStatus = model<IFlight>('Flight-Status', FlightStatusSchema);
 