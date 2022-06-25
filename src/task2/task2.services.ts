import { Injectable , NotFoundException} from "@nestjs/common";
import { Flight } from "./task2.model";

@Injectable()

export class FlightService{
    flight: Flight[] = [];

    bookFlight(source: string, destination: string, date: string, fare: number, seats: number, flightno: string,seatno:number){
        const id = Math.random().toString();
        const newFlight = new Flight(id, fare,source, destination, seatno, seats, flightno , date);
        if(seatno > seats){
            return "Booking not taken";
        }
        else{
        this.flight.push(newFlight);
        return "Booked";
        }
    }
    
    cancel(id: string){
        const index = this.flight.findIndex(item => String(item.id) === id);
        this.flight.splice(index, 1);
    }
    findFlight(id: string): [Flight, number] {
        const flightIndex = this.flight.findIndex(item => String(item.id) === id);
        const flight = this.flight[flightIndex];
        if (!flight) {
          throw new NotFoundException('Flight not found');
        }
        return [flight, flightIndex];
      }
    getBookingList(){
        return [...this.flight];
    }
    
    getFlightAvailability(from: string, to: string, date: string, flightno: string){
        const index = this.flight.findIndex(item => item.source === from && item.destination === to && item.date === date && item.flightno === flightno);

        return this.flight[index];
    }
    getUserBooking(id: string){
        const index = this.flight.findIndex(item => String(item.id) === id);
        return this.flight[index];
    }
    getSingleFlight(flightId: string) {
        const flight = this.findFlight(flightId)[0];
        return { ...flight };
      }
}