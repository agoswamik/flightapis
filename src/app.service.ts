import { getFlightInfo } from "./service_modules/getFlightInfo";
import { flight_ids, fpst } from "./app.controller";
import { UpdateFlights } from "./service_modules/UpdateFlights";
import mongoose from "mongoose";
import { toArray } from "rxjs";
import { UserController} from "./service_modules/UserController";
import { generator } from "./service_modules/generator";

export class AppService{
    async getFlightSeatInfo():Promise<any>{
        var flights = new getFlightInfo();
        var result = await flights.getSeatInfo();
        return flights.getSeatInfo();
    }
    getUserDetails(Flightid:number,  userName:string, no_of_seats:number, trips:string, counter: number):any{
        var price: number;
        var tripstatus: string;
        var gen = new generator();
        var userController = new UserController();
        var userid = gen.getUserId(counter);
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
    async findUser(userId:string):Promise<any>{
    var userController = new UserController();
    var req_user:any = await userController.findUser(userId);
    req_user = Array(req_user);
    req_user = req_user[0][0];
    console.log(req_user);
    if(req_user == undefined){
        return "0";
    }
    return req_user;
}
    async UpdateDeleteFlight(userId: string):Promise<void>{
    var userController = new UserController();
    var updater = new UpdateFlights();
    var req_user:any = await userController.findUser(userId);
     req_user = Array(req_user);
     req_user = req_user[0][0];
     updater.updateDeleteBooking(req_user);
     console.log(req_user);

}
   DeleteUser( userId:string):void{
    var userController = new UserController();
    userController.deleteUser(userId);
    
}
    async UpdateCancelSeats(userId:string, no_of_seats:number):Promise<void>{
    var updater = new UserController();
    var fl_updater = new UpdateFlights();
    var req_user:any = await updater.findUser(userId);
     req_user = Array(req_user);
     req_user = req_user[0][0];
    updater.updateUser(userId, no_of_seats);
    fl_updater.updateCancelSeats(req_user.FlightId, no_of_seats);
}


}