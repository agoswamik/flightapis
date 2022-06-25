import { AppService } from './app.service';
export declare var fst: any;
export declare var fpst: any;
export declare var flight_ids: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
};
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    sendFlightSeatInfo(params: any): Promise<any>;
    sendFlightPriceInfo(params: any): any;
    cancelUserSeats(params: any): Promise<string>;
    deleteUserBooking(params: any): Promise<string>;
    sendUserInfo(params: any): Promise<any>;
    bookFlightsforUser(params: any): Promise<any>;
}
