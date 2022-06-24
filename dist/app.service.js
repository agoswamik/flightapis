"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const getFlightInfo_1 = require("./service_modules/getFlightInfo");
const app_controller_1 = require("./app.controller");
const UpdateFlights_1 = require("./service_modules/UpdateFlights");
const UserController_1 = require("./service_modules/UserController");
class AppService {
    async getFlightSeatInfo() {
        var flights = new getFlightInfo_1.getFlightInfo();
        var result = await flights.getSeatInfo();
        return flights.getSeatInfo();
    }
    getUserDetails(Flightid, userName, no_of_seats, trips, userid) {
        var price;
        var tripstatus;
        var userController = new UserController_1.UserController();
        price = no_of_seats * app_controller_1.fpst[Object.keys(app_controller_1.fpst)[Flightid]];
        price += 0.15 * price;
        if (trips === 'up&down') {
            tripstatus = 'up & down';
            price = price * 2;
        }
        else {
            tripstatus = trips;
        }
        var user = userController.addUser(Flightid, userName, no_of_seats, tripstatus, userid, price);
        return user;
    }
    async updateBookFlight(Flightid, no_of_seats) {
        var updater = new UpdateFlights_1.UpdateFlights();
        var flightinfo = new getFlightInfo_1.getFlightInfo();
        var flight_obj = await flightinfo.findFlight(Flightid, app_controller_1.flight_ids);
        flight_obj = Array(flight_obj);
        flight_obj = flight_obj[0][0];
        if (flight_obj.No_of_seats >= no_of_seats) {
            updater.updateBookFlight(flight_obj, no_of_seats);
            return true;
        }
        return false;
    }
    findUser(user_arr, id) {
        return user_arr.find(x => x.UserId == id);
    }
    UpdateDeleteFlight(fst, userId, user_arr) {
        var user = user_arr.find(x => x.UserId == userId);
        var fid = user.Flight_id;
        var no_of_seats = user.No_of_seats;
        fst[Object.keys(fst)[fid]] = fst[Object.keys(fst)[fid]] + no_of_seats;
    }
    DeleteUser(user_arr, userId) {
        user_arr.splice(user_arr.findIndex(x => x.UserId == userId), 1);
    }
    UpdateCancelSeats(fst, userId, no_of_seats, user_arr) {
        var user = user_arr.find(x => x.UserId == userId);
        var fid = user.Flight_id;
        user.No_of_seats = user.No_of_seats - no_of_seats;
        fst[Object.keys(fst)[fid]] = fst[Object.keys(fst)[fid]] + no_of_seats;
    }
    getRefundamt(userId, user_arr, no_of_seats, fpst) {
        var user = user_arr.find(x => x.UserId == userId);
        var fid = user.Flight_id;
        return fpst[Object.keys(fpst)[fid]] * no_of_seats;
    }
}
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map