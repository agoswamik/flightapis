export declare class AppService {
    getFlightSeatInfo(): Promise<any>;
    getUserDetails(Flightid: number, userName: string, no_of_seats: number, trips: string, counter: number): any;
    updateBookFlight(Flightid: number, no_of_seats: number): Promise<boolean>;
    findUser(userId: string): Promise<any>;
    UpdateDeleteFlight(userId: string): Promise<void>;
    DeleteUser(userId: string): void;
    UpdateCancelSeats(userId: string, no_of_seats: number): Promise<void>;
}
