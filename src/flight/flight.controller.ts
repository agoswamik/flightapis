import { Controller, Post, Body } from "@nestjs/common";
import { FlightService } from './flight.service';

@Controller('flights')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Post()
    bookFlight(@Body('to') flightTo: string,
                @Body('from') flightFrom: string, 
                @Body('price') flightPrice: number, 
                @Body('date') flightDate: string, 
                @Body('seats') flightSeats: number, 
                 ): any {
        this.flightService.bookFlight(flightTo, flightFrom, flightPrice, flightDate, flightSeats);
    }
    

}