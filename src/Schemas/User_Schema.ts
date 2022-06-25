import mongoose, { model, Schema } from "mongoose";

export interface IUser {
    Name: string;
    UserId: string;
    Booking_Status: string;
    FlightId: number;
    Flight_name: string;
    No_of_seats: number;
    Total_Cost: number;
    Trips: string
  }
  
  // 2. Create a Schema corresponding to the document interface.
  export const FlightStatusSchema = new Schema<IUser>({
    Name: { type: String, required: true },
    UserId: {type: String, required: true},
    Booking_Status: {type: String, default: "Confirmed"},
    FlightId: {type:Number, required: true},
    Flight_name: {type: String, required: true},
    No_of_seats: { type: Number, required: true },
    Total_Cost: { type: Number, required: true },
    Trips:{type:String, required:true, default:"Up"}
  });
  
  // 3. Create a Model.
  export const User = model<IUser>('User', FlightStatusSchema);
 