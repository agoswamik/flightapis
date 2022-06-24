import { Injectable , NotFoundException} from "@nestjs/common";
import { Flight } from "./flight.model";

@Injectable()

export class FlightService{
    flight: Flight[] = [];

    bookFlight(from: string, destination: string, date: string, price: number, seats: number, flightno: string,seatno:number){
        let flightid = Math.random().toString();
        const newFlight = new Flight(flightid, from, destination, date, price, seats, flightno , seatno);
        if(seatno > seats){
            return "flight not booked";
        }
        else{
        this.flight.push(newFlight);
        return "flight booked";
        }
    }
    
    cancelFlight(id: string){
        const index = this.flight.findIndex(item => String(item.id) === id);
        this.flight.splice(index, 1);
    }
    findFlight(id: string): [Flight, number] {
        const flightIndex = this.flight.findIndex(item => String(item.id) === id);
        const flight = this.flight[flightIndex];
        if (!flight) {
          throw new NotFoundException('Could not find the flight.');
        }
        return [flight, flightIndex];
      }
    getBookingList(){
        return [...this.flight];
    }
    
    getFlightAvailability(from: string, destination: string, date: string, flightno: string){
        const index = this.flight.findIndex(item => item.from === from && item.destination === destination && item.date === date && item.flightno === flightno);

        return this.flight[index];
    }
    
    getSingleFlight(flightId: string) {
        const flight = this.findFlight(flightId)[0];
        return { ...flight };
      }
}