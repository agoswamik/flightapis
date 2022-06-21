import mongoose,{Schema,Document,Types,model,Model} from "mongoose"


const bookSchema : Schema = new Schema({
   
    flightNumbers :{
       type : String,
       required : true
    },
    seats : {
        type : Number,
        required : true
    },
    payment : {
        type : Boolean,
        required : true,
        
    } 
})
export interface BookFlight{
    
    flightNumbers : string;
    seats : number;
    payment : boolean;
}


export default mongoose.model<BookFlight>('Book',bookSchema)


