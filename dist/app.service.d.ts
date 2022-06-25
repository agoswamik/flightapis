export declare class AppService {
    getFlightSeatInfo(): Promise<any>;
    getUserDetails(Flightid: number, userName: string, no_of_seats: number, trips: string, counter: number): any;
    updateBookFlight(Flightid: number, no_of_seats: number): Promise<boolean>;
    findUser(user_arr: Array<any>, id: number): any;
    UpdateDeleteFlight(userId: string): Promise<void>;
    DeleteUser(userId: string): void;
    UpdateCancelSeats(fst: any, userId: number, no_of_seats: number, user_arr: Array<any>): void;
    getRefundamt(userId: number, user_arr: Array<any>, no_of_seats: number, fpst: any): number;
}
