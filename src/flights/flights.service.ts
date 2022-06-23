import { Injectable } from '@nestjs/common';
import { BookFlight, BookingList, FlightAvailabilityList } from './flights.model';

@Injectable()
export class FlightService{

    flights: BookFlight[] = [];
    getbooklist: BookingList[];
    flightAvList: FlightAvailabilityList[];

    bookFlight(from: string, to: string, date: string, seats: number, flightNumber: string, isBooked: boolean, bookingStatus: string, paymentStatus: string){
        let uid = Math.random().toString(26).slice(2);
        const newflight = new BookFlight(uid, from, to, date, seats, flightNumber, isBooked, bookingStatus, paymentStatus);
        this.flights.push(newflight);
    }

    cancelFlight(id: string){
        const index = this.flights.findIndex(flight => flight.id === id);
        this.flights.splice(index, 1);
    }

    getbookingList(bookingStatus: string){
        const bookingList = this.getbooklist.filter(flight => flight.bookingStatus === bookingStatus);
        return bookingList;
    }

    getFlightAvailability(flightNumber: string){
        const availableFlights = this.flightAvList.filter(flight => flight.flightNumber === flightNumber);
        return availableFlights;
    }

    getUserBookings(id: string){
        const userBookings = this.flights.filter(flight => flight.id === id);
        return userBookings;
    }
}