import { Controller, Post, Body } from '@nestjs/common'
import { BookFlight, BookingList, FlightAvailabilityList } from './flights.model';
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

    @Post('cancelflight')
    cancelFlight(@Body('id') id: string): void {
        this.flightService.cancelFlight(id);
    }

    @Post('getbookinglist')
    getBookingList(@Body('bookingStatus') bookingStatus: string): BookingList[] {
        return this.flightService.getbookingList(bookingStatus);
    }

    @Post('getflightavailability')
    getFlightAvailability(@Body('flightNumber') flightNumber: string): FlightAvailabilityList[] {
        return this.flightService.getFlightAvailability(flightNumber);
    }

    @Post('getuserbookings')
    getUserBookings(@Body('id') id: string): BookFlight[] {
        return this.flightService.getUserBookings(id);
    }

}
