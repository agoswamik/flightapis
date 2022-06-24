import { FlightService } from "./flight.service";
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    bookFlight(flightFrom: string, flightDestination: string, flightDate: string, flightPrice: number, flightSeats: number, flightNo: string, seatNo: number): any;
    cancelFlight(id: string): string;
    getFlight(id: string): {
        id: string;
        from: string;
        destination: string;
        date: string;
        price: number;
        seats: number;
        flightno: string;
        seatno: number;
    };
    getBookingList(): any;
    getFlightAvailability(from: string, to: string, date: string, flightno: string): any;
}
