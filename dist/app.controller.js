"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = exports.flight_ids = exports.fpst = exports.fst = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
exports.fst = {
    AirIndia_Kol_Del: 100,
    Indigo_Kol_Del: 100,
    SpiceJet_Kol_Del: 100,
    AirIndia_Kol_Bang: 100,
    Indigo_Kol_Bang: 100,
    SpiceJet_Kol_Bang: 100
};
exports.fpst = {
    AirIndia_Kol_Del: 200,
    Indigo_Kol_Del: 175,
    SpiceJet_Kol_Del: 150,
    AirIndia_Kol_Bang: 240,
    Indigo_Kol_Bang: 195,
    SpiceJet_Kol_Bang: 170
};
exports.flight_ids = {
    0: "AirIndia_Kol_Del",
    1: "Indigo_Kol_Del",
    2: "SpiceJet_Kol_Del",
    3: "AirIndia_Kol_Bang",
    4: "Indigo_Kol_Bang",
    5: "SpiceJet_Kol_Bang"
};
var user_arr = [];
var counter_id = 0;
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return "Welcome to flight API services!";
    }
    async sendFlightSeatInfo(params) {
        var result = this.appService.getFlightSeatInfo();
        return result;
    }
    sendFlightPriceInfo(params) {
        return exports.fpst;
    }
    sendActiveUsers(params) {
        return user_arr;
    }
    cancelUserSeats(params) {
        var userId = params.userId;
        var no_of_seats = parseInt(params.no_of_seats, 10);
        this.appService.UpdateCancelSeats(exports.fst, userId, no_of_seats, user_arr);
        var refund_amt = this.appService.getRefundamt(userId, user_arr, no_of_seats, exports.fpst);
        return "Seat cancellation successful ! Amount to be refunded =" + refund_amt;
    }
    deleteUserBooking(params) {
        var userId = params.userId;
        this.appService.UpdateDeleteFlight(exports.fst, userId, user_arr);
        this.appService.DeleteUser(user_arr, userId);
        return "Thank you for travelling with us ! Hope you had a safe journey";
    }
    sendUserInfo(params) {
        var userId = params.userId;
        var user = this.appService.findUser(user_arr, userId);
        if (user == undefined) {
            return "Sorry! User not found !";
        }
        return user;
    }
    async bookFlightsforUser(params) {
        var userName = params.userName;
        var Flightid = parseInt(params.Flightid, 10);
        var no_of_seats = parseInt(params.no_of_seats, 10);
        var trips = params.trips;
        if (Flightid > 5) {
            return "Sorry! The flight you are looking for isn't available";
        }
        if (await this.appService.updateBookFlight(Flightid, no_of_seats) == true) {
            console.log(no_of_seats);
            return "Seats booked successfully!";
        }
        return "Sorry! Not enough seats available";
    }
};
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/getFlightSeatInfo'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "sendFlightSeatInfo", null);
__decorate([
    (0, common_1.Get)('/getFlightPriceInfo'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "sendFlightPriceInfo", null);
__decorate([
    (0, common_1.Get)('/getActiveUsers'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "sendActiveUsers", null);
__decorate([
    (0, common_1.Get)('/cancelSeats/:userId/:no_of_seats'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "cancelUserSeats", null);
__decorate([
    (0, common_1.Get)('/deletebooking/:userId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "deleteUserBooking", null);
__decorate([
    (0, common_1.Get)('/getUserInfo/:userId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "sendUserInfo", null);
__decorate([
    (0, common_1.Get)('/bookFlight/:userName/:Flightid/:no_of_seats/:trips'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "bookFlightsforUser", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map