import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { FlightService } from "./task2.services";

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Post()
    bookFlight(@Body('source') flightsource: string, 
                @Body('destination') flightdestination: string, 
                @Body('date') flightDate: string, 
                @Body('fare') flightfare: number, 
                @Body('seats') flightSeats: number, 
                @Body('flightno') flightNo: string,
                @Body('seatno') seatNo: number,
                 ) {
        this.flightService.bookFlight(flightsource, flightdestination,flightDate, flightfare, flightSeats, flightNo , seatNo);
    }
    @Delete()
    cancel(@Body('customerid') id: string): string {
        this.flightService.cancel(id); 
        return "Flight has been cancelled";
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
    getFlightAvailability(@Body('source') source: string,
                            @Body('destination') destination: string, 
                            @Body('date') date: string, 
                            @Body('flightno') flightno: string): any {
        return this.flightService.getFlightAvailability(source, destination, date, flightno);
    }
    @Get()
    getUserBooking(@Body('') id: string): any {
        return this.flightService.getUserBooking(id);
    }
}