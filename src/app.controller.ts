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
  
  @Get('/cancelSeats/:userId/:no_of_seats')
  async cancelUserSeats(@Param()params):Promise<string> {
    var userId = params.userId;
    var no_of_seats = parseInt(params.no_of_seats,10);
    await this.appService.UpdateCancelSeats(userId, no_of_seats);
    
    return "Seat cancellation successful ! Amount to be refunded soon";
  }
  @Get('/deletebooking/:userId')
  async deleteUserBooking(@Param()params):Promise<string> {
    var userId = params.userId;
    await this.appService.UpdateDeleteFlight(userId);
    await this.appService.DeleteUser(userId);
    return "Thank you for travelling with us ! Hope you had a safe journey";
  }
  @Get('/getUserInfo/:userId')
  async sendUserInfo(@Param()params) {
    var userId = params.userId;
    var user = this.appService.findUser(userId);
    if(await user == "0"){
      console.log(user);
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
          var user_obj = this.appService.getUserDetails(Flightid, userName, no_of_seats, trips, counter_id);
          counter_id++;
          return user_obj;
    }
    
    return "Sorry! Not enough seats available";
  }

}


