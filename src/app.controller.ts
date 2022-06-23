import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
export var fst:any =  {
  AirIndia_Kol_Del : 100,
  Indigo_Kol_Del : 100,
  SpiceJet_Kol_Del : 100,
  AirIndia_Kol_Bang : 100,
  Indigo_Kol_Bang : 100,
  SpiceJet_Kol_Bang : 100
};
export var fpst:any =  {
  AirIndia_Kol_Del : 200,
  Indigo_Kol_Del : 175,
  SpiceJet_Kol_Del : 150,
  AirIndia_Kol_Bang : 240,
  Indigo_Kol_Bang : 195,
  SpiceJet_Kol_Bang : 170
}; 
export var flight_ids = {
  0: "AirIndia_Kol_Del",
  1:  "Indigo_Kol_Del" ,
  2: "SpiceJet_Kol_Del",
  3: "AirIndia_Kol_Bang",
  4: "Indigo_Kol_Bang" ,
  5: "SpiceJet_Kol_Bang"
}
var user_arr = [];
var counter_id = 0;

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}
  

  @Get('')
  getHello(): string {
    return "Welcome to flight API services!";
  }
  @Get('/getFlightSeatInfo')
  async sendFlightSeatInfo(@Param()params){
      var result = this.appService.getFlightSeatInfo();
      return result;
  }
  @Get('/getFlightPriceInfo')
  sendFlightPriceInfo(@Param()params):any {
    return fpst;
  }
  @Get('/getActiveUsers')
  sendActiveUsers(@Param()params):any {
    return user_arr;
  }
  @Get('/cancelSeats/:userId/:no_of_seats')
  cancelUserSeats(@Param()params):string {
    var userId = params.userId;
    var no_of_seats = parseInt(params.no_of_seats,10);
    this.appService.UpdateCancelSeats(fst, userId, no_of_seats, user_arr);
    var refund_amt = this.appService.getRefundamt(userId, user_arr, no_of_seats, fpst);
    return "Seat cancellation successful ! Amount to be refunded =" + refund_amt;
  }
  @Get('/deletebooking/:userId')
  deleteUserBooking(@Param()params):string {
    var userId = params.userId;
    this.appService.UpdateDeleteFlight(fst, userId, user_arr);
    this.appService.DeleteUser(user_arr, userId);
    return "Thank you for travelling with us ! Hope you had a safe journey";
  }
  @Get('/getUserInfo/:userId')
  sendUserInfo(@Param()params):string {
    var userId = params.userId;
    var user = this.appService.findUser(user_arr, userId);
    if(user == undefined){
      return "Sorry! User not found !"
    }
    return user;
  }
  @Get('/bookFlight/:userName/:Flightid/:no_of_seats/:trips')
  async bookFlightsforUser(@Param()params):Promise<any> {
    var userName = params.userName;
    var Flightid = parseInt(params.Flightid,10);
    var no_of_seats = parseInt(params.no_of_seats, 10);
    var trips = params.trips;
    if(Flightid > 5){
      return "Sorry! The flight you are looking for isn't available"
    }
    if(await this.appService.updateBookFlight(Flightid, no_of_seats)==true){
          console.log(no_of_seats);
          return "Seats booked successfully!"
    }
    
    return "Sorry! Not enough seats available";
  }

}
