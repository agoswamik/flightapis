import { Controller, Post, Body } from '@nestjs/common'
import { FlightService } from './flights.service';

@Controller('flights')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}

    @Post('bookflight')
    bookFlight(
        @Body('from') from: string,
        @Body('to') to: string,
        @Body('date') date: string,
        @Body('seats') seats: number,
        @Body('flightNumber') flightNumber: string,
        @Body('isBooked') isBooked: boolean,
        @Body('bookingStatus') bookingStatus: string,
        @Body('paymentStatus') paymentStatus: string,
    ): void {
        this.flightService.bookFlight(
            from,
            to,
            date,
            seats,
            flightNumber,
            isBooked,
            bookingStatus,
            paymentStatus,
        );
    }
}
