import { Injectable } from "@nestjs/common";
import { Flight } from "./flight.model";
import {v4 as uuidv4} from 'uuid';

@Injectable()

export class FlightService{
    flight: Flight[] = [];

    bookFlight(from: string, to: string, date: string, price: number, seats: number, company: string){
        let myuuid = uuidv4();
        const newFlight = new Flight(myuuid, from, to, date, price, seats, company);
        this.flight.push(newFlight);
    }
    cancelFlight(id: string){
        const index = this.flight.findIndex(item => String(item.id) === id);
        this.flight.splice(index, 1);
    }
    getBookingList(){
        return [...this.flight];
    }
    getFlightAvailability(from: string, to: string, date: string, company: string){
        const index = this.flight.findIndex(item => item.from === from && item.to === to && item.date === date && item.company === company);
        return this.flight[index];
    }
    getUserBooking(id: string){
        const index = this.flight.findIndex(item => String(item.id) === id);
        return this.flight[index];
    }
}