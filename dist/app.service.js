"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const getFlightInfo_1 = require("./service_modules/getFlightInfo");
const app_controller_1 = require("./app.controller");
const UpdateFlights_1 = require("./service_modules/UpdateFlights");
const UserController_1 = require("./service_modules/UserController");
const generator_1 = require("./service_modules/generator");
class AppService {
    async getFlightSeatInfo() {
        var flights = new getFlightInfo_1.getFlightInfo();
        var result = await flights.getSeatInfo();
        return flights.getSeatInfo();
    }
    getUserDetails(Flightid, userName, no_of_seats, trips, counter) {
        var price;
        var tripstatus;
        var gen = new generator_1.generator();
        var userController = new UserController_1.UserController();
        var userid = gen.getUserId(counter);
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
    async UpdateDeleteFlight(userId) {
        var userController = new UserController_1.UserController();
        var updater = new UpdateFlights_1.UpdateFlights();
        var req_user = await userController.findUser(userId);
        req_user = Array(req_user);
        req_user = req_user[0][0];
        updater.updateDeleteBooking(req_user);
        console.log(req_user);
    }
    DeleteUser(userId) {
        var userController = new UserController_1.UserController();
        userController.deleteUser(userId);
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