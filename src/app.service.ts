import { getFlightInfo } from "./service_modules/getFlightInfo";
import { flight_ids, fpst } from "./app.controller";
import { UpdateFlights } from "./service_modules/UpdateFlights";
import mongoose from "mongoose";
import { toArray } from "rxjs";
import { UserController } from "./service_modules/UserController";

export class AppService{
    async getFlightSeatInfo():Promise<any>{
        var flights = new getFlightInfo();
        var result = await flights.getSeatInfo();
        return flights.getSeatInfo();
    }
    getUserDetails(Flightid:number,  userName:string, no_of_seats:number, trips:string, userid: number):any{
        var price: number;
        var tripstatus: string;
        var userController = new UserController();
        price = no_of_seats * fpst[Object.keys(fpst)[Flightid]];
        price += 0.15*price;
        if(trips === 'up&down'){
           tripstatus = 'up & down';
           price = price * 2 ;
        }
        else{
           tripstatus = trips;
        }
        var user = userController.addUser(Flightid, userName, no_of_seats, tripstatus, userid, price);
       return user;

}
    async updateBookFlight( Flightid: number, no_of_seats: number) : Promise<boolean>{
    var updater = new UpdateFlights();
    var flightinfo = new getFlightInfo();
    var flight_obj:any = await flightinfo.findFlight(Flightid, flight_ids);
    flight_obj = Array(flight_obj);
    flight_obj = flight_obj[0][0];
    if(flight_obj.No_of_seats >= no_of_seats) {
        updater.updateBookFlight(flight_obj, no_of_seats);
        return true;
    }
    return false;
    
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