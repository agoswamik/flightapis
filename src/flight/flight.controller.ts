import { Controller, Post, Put, Get, Delete, Body } from "@nestjs/common";
import { FlightService } from "./flight.service";

@Controller('flight')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}
    @Post()
    async bookFlight(@Body('from') flightFrom: string, 
                @Body('to') flightTo: string, 
                @Body('date') flightDate: string, 
                @Body('price') flightPrice: number, 
                @Body('seats') flightSeats: number, 
                @Body('company') flightCompany: string, ) {
        const generatedId = await this.flightService.bookFlight(flightFrom, flightTo,flightDate, flightPrice, flightSeats, flightCompany);
        return {id : generatedId };
    }
    @Delete(':id')
    async cancelFlight(@Body('id') id: string){
        await this.flightService.cancelFlight(id);
        return "Ticket successfully cancelled";
    }
    @Get()
    async getBookingList(){
        const flight = await this.flightService.getBookingList();
        return flight;
    }
    @Get(':id')
    getFlightAvailability(@Body('from') from: string,
                            @Body('to') to: string, 
                            @Body('date') date: string, 
                            @Body('company') company: string): any {
        return this.flightService.getFlightAvailability(from, to, date, company);
    }
    @Get(':id')
    getUserBooking(@Body('') id: string): any {
        return this.flightService.getUserBooking(id);
    }
}