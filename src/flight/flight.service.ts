import { Injectable } from "@nestjs/common";
import { Flight } from './flight.model'

@Injectable()
export class FlightService {
    flight: Flight[] = [];

    bookFlight( to: string, from: string, price: number, date: string, seats: number){
        let flightid = Math.random().toString();
        const newFlight = new Flight(flightid, to, from, price, date, seats);
        
        this.flight.push(newFlight);
        return "flight booked";
        
    }
    
}