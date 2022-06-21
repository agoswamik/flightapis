export declare class AppService {
    getUserDetails(Flightid: number, fpst: any, userName: string, no_of_seats: number, trips: string, userid: number): any;
    updateBookFlight(flight_st_obj: any, id: number, no_of_seats: number): boolean;
    findUser(user_arr: Array<any>, id: number): any;
    UpdateDeleteFlight(fst: any, userId: number, user_arr: Array<any>): void;
    DeleteUser(user_arr: Array<any>, userId: number): void;
    UpdateCancelSeats(fst: any, userId: number, no_of_seats: number, user_arr: Array<any>): void;
    getRefundamt(userId: number, user_arr: Array<any>, no_of_seats: number, fpst: any): number;
}
