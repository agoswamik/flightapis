// mongodb+srv://Romit1001:<password>@cluster0.3sbip.mongodb.net/?retryWrites=true&w=majority
import mongoose, { model, Schema } from "mongoose";
import { fpst, fst } from "./app.controller";

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
  const FlightStatus = model<IFlight>('Flight-Status', FlightStatusSchema);
  /* for(var i=0; i<=5; i++){
    var flight = new FlightStatus({
      Name : Object.keys(fst)[i],
      No_of_seats : fst[Object.keys(fst)[i]],
      Price : fpst[Object.keys(fpst)[i]]
    })
    flight.save();
  }  */
  /* var price = 200
  FlightStatus.find({No_of_seats: 50, Price: price}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  }).clone().then(() => {
    mongoose.disconnect();
  }); */