import mongoose, {Schema,Model,Document, Types} from "mongoose"

type Booking = Document & {
        
        flightNumbers : string[];
        payments : boolean;
        seats : number;
        bookDate : any;
        bookingStatus : string;
        arrivalLocation : string[];
        departureLocation : string;
        arrivalDateandTime : any;
        departureDateandTime : any;
        airfareCharges : number;
        tax : any;
        totalCharges : number;
      }
type FlightAvailability = Document & {
    flightNumbers : string[],
    availableSeats : number
}
type UserInput = {
    flightNumbers : Booking['flightNumbers'];
    payments : Booking['payments'];
    seats : Booking['seats'];
    bookDate : Booking['bookDate'];
    bookingStatus : Booking['bookingStatus'];
    arrivalLocation : Booking['arrivalLocation'];
    departureLocation : Booking['departureLocation'];
    arrivalDateandTime : Booking['arrivalDateandTime'];
    departureDateandTime : Booking['departureDateandTime'];
    airfareCharges : Booking['airfareCharges'];
    tax : Booking['tax'];
    totalCharges : Booking['totalCharges']
  }
type flightInput = {
    flightNumbers : FlightAvailability['flightNumbers'];
    availableSeats : FlightAvailability['availableSeats'];
}
const flightSchema = new Schema(
    { 
        
        flightNumbers : {
            type : Array,
            required: true,
        },
        payments : {
            type : Schema.Types.Boolean,
            required : true,
        },
        seats : {
            type : Schema.Types.Number,
            required : true,
        },
        bookDate : {
            type : Schema.Types.Date,
            required : true,
        },
        bookingStatus : {
            type : Schema.Types.String,
            required : true,
        },
        arrivalLocation : {
            type : Array,
            required : true,
        },
        departureLocation : {
            type : Schema.Types.String,
            required : true,
        },
        arrivalDateandTime : {
            type : Schema.Types.Date,
            required : true,
        },
        departureDateandTime : {
            type : Schema.Types.Date,
            required : true,
        },
        airfareCharges : {
            type : Schema.Types.Number,
            required : true,
        },
        totalCharges : {
            type : Schema.Types.Number,
            required : true,
        }
    },{
        timestamps : true,
    }
)
const flightAvailableSchema = new Schema(
    {
        flightNumbers : {
            type : Array,
            required : true
        },
        availableSeats : {
            type : Schema.Types.Number,
            required : true
        }
    }
)
const Book : Model<Booking> = mongoose.model<Booking>("Booking",flightSchema)
const FlightAvailable : Model<FlightAvailability> = mongoose.model<FlightAvailability>("FlightAvailable",flightAvailableSchema)
export {Book,UserInput,Booking,FlightAvailable,flightInput,FlightAvailability}