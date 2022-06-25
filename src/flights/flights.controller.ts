import { Controller, Post, Body } from '@nestjs/common'
import { BookFlight, BookingList, FlightAvailabilityList } from './flights.model';
import { FlightService } from './flights.service';

@Controller('flights')
export class FlightController {
    constructor(private readonly flightService: FlightService) {}

    @Post('bookflight')
    async bookFlight(
        @Body('from') from: string,
        @Body('to') to: string,
        @Body('date') date: string,
        @Body('seats') seats: number,
        @Body('flightNumber') flightNumber: string,
        @Body('isBooked') isBooked: boolean,
        @Body('paymentStatus') paymentStatus: string,
    ) {
       const res = await this.flightService.bookFlight(
            from,
            to,
            date,
            seats,
            flightNumber,
            isBooked,
            paymentStatus,
        );
        return res;
    }

    @Post('cancelflight')
    async cancelFlight(@Body('id') id: string) {
        const res = this.flightService.cancelFlight(id);
        return res;
    }

    @Post('getbookinglist')
    getBookingList(@Body('bookingStatus') bookingStatus: string) {
        const res = this.flightService.getbookingList(bookingStatus);
        return res;
    }

    @Post('getflightavailability')
    getFlightAvailability(@Body('flightNumber') flightNumber: string) {
        const res = this.flightService.getFlightAvailability(flightNumber);
        return res;
    }

    @Post('getuserbookings')
    getUserBookings(@Body('id') id: string) {
        const res = this.flightService.getUserBookings(id);
        return res;
    }
}
