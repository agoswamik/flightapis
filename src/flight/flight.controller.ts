import { Controller, Post, Get, Body } from "@nestjs/common";
import { FlightService } from "./flight.service";

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Post()
    bookFlight(@Body('from') flightFrom: string, 
                @Body('to') flightTo: string, 
                @Body('date') flightDate: string, 
                @Body('price') flightPrice: number, 
                @Body('seats') flightSeats: number, 
                @Body('company') flightCompany: string, ): any {
        this.flightService.bookFlight(flightFrom, flightTo,flightDate, flightPrice, flightSeats, flightCompany);
    }
    @Post()
    cancelFlight(@Body('id') id: string): any {
        this.flightService.cancelFlight(id);
    }
    @Get()
    getBookingList(): any {
        return this.flightService.getBookingList();
    }
    @Get()
    getFlightAvailability(@Body('from') from: string,
                            @Body('to') to: string, 
                            @Body('date') date: string, 
                            @Body('company') company: string): any {
        return this.flightService.getFlightAvailability(from, to, date, company);
    }
    @Get()
    getUserBooking(@Body('') id: string): any {
        return this.flightService.getUserBooking(id);
    }
}