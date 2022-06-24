import { Controller, Post, Get, Body, Delete , Param } from "@nestjs/common";
import { FlightService } from "./flight.service";

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Post()
    bookFlight(@Body('from') flightFrom: string, 
                @Body('destination') flightDestination: string, 
                @Body('date') flightDate: string, 
                @Body('price') flightPrice: number, 
                @Body('seats') flightSeats: number, 
                @Body('flightno') flightNo: string,
                @Body('seatno') seatNo: number,
                 ): any {
        this.flightService.bookFlight(flightFrom, flightDestination,flightDate, flightPrice, flightSeats, flightNo , seatNo);
    }
    @Delete()
    cancelFlight(@Body('id') id: string): string {
        this.flightService.cancelFlight(id); 
        return "Your flight has been cancelled";
    }
    @Get(':id')
  getFlight(@Param('id') id: string) {
    return this.flightService.getSingleFlight(id);
  }
    @Get()
    getBookingList(): any {
        return this.flightService.getBookingList();
    }
    
    @Get()
    getFlightAvailability(@Body('from') from: string,
                            @Body('to') to: string, 
                            @Body('date') date: string, 
                            @Body('flightno') flightno: string): any {
        return this.flightService.getFlightAvailability(from, to, date, flightno);
    }
    
    
}