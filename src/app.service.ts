import { getFlightInfo } from "./service_modules/getFlightInfo";
import { flight_ids } from "./app.controller";
import { UpdateFlights } from "./service_modules/UpdateFlights";
import mongoose from "mongoose";
import { toArray } from "rxjs";
export class AppService{
    async getFlightSeatInfo():Promise<any>{
        var flights = new getFlightInfo();
        var result = await flights.getSeatInfo();
        return flights.getSeatInfo();
    }
    getUserDetails(Flightid:number, fpst:any, userName:string, no_of_seats:number, trips:string, userid: number):any{
        var price: number;
        var tripstatus: string;
        var user: any;
        price = no_of_seats * fpst[Object.keys(fpst)[Flightid]];
        price += 0.15*price;
        if(trips === 'up&down'){
           tripstatus = 'up & down';
           price = price * 2 ;
        }
        else{
           tripstatus = trips;
        }
        user = {Name: userName,
               UserId: userid,
               Flight_name: Object.keys(fpst)[Flightid],
               Flight_id: Flightid,
               No_of_seats: no_of_seats,
               Booking_status: "Confirmed",
               Price: price,
               Trip_status: tripstatus
            }
       return user;

}
    async updateBookFlight( Flightid: number, no_of_seats: number) : Promise<boolean>{
    var updater = new UpdateFlights();
    var flightinfo = new getFlightInfo();
    var flight_obj:any = await flightinfo.findFlight(Flightid, flight_ids);
    flight_obj = Array(flight_obj);
    flight_obj = flight_obj[0][0]; 
    console.log(flight_obj.No_of_seats);
    console.log(flight_obj.No_of_seats >= no_of_seats);
    return (flight_obj.No_of_seats >= no_of_seats);
}
findUser(user_arr:Array<any>, id:number):any{
    return user_arr.find(x => x.UserId == id);
}
UpdateDeleteFlight(fst:any, userId:number, user_arr:Array<any>):void{
    var user = user_arr.find(x => x.UserId == userId);
    var fid = user.Flight_id;
    var no_of_seats = user.No_of_seats;
    fst[Object.keys(fst)[fid]] = fst[Object.keys(fst)[fid]] + no_of_seats;    
}
DeleteUser(user_arr:Array<any>, userId:number):void{
    user_arr.splice(user_arr.findIndex(x => x.UserId == userId),1);
}
UpdateCancelSeats(fst:any, userId:number, no_of_seats:number, user_arr:Array<any>):void{
    var user = user_arr.find(x => x.UserId == userId);
    var fid = user.Flight_id;
    user.No_of_seats = user.No_of_seats - no_of_seats; 
    fst[Object.keys(fst)[fid]] = fst[Object.keys(fst)[fid]] + no_of_seats;

}
getRefundamt(userId:number, user_arr:Array<any>, no_of_seats:number, fpst:any):number{
   var user = user_arr.find(x => x.UserId == userId);
   var fid = user.Flight_id;

   return fpst[Object.keys(fpst)[fid]] * no_of_seats;
}

}