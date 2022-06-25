"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const mongoose_1 = require("mongoose");
const app_controller_1 = require("../app.controller");
const User_Schema_1 = require("../Schemas/User_Schema");
class UserController {
    updateUser(userId, no_of_seats) {
        no_of_seats = no_of_seats * (-1);
        mongoose_1.default.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        User_Schema_1.User.updateOne({ UserId: userId }, { $inc: { No_of_seats: no_of_seats } }, function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Done Updating Cancellation!");
            }
        }).clone();
    }
    deleteUser(userId) {
        mongoose_1.default.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        console.log(userId);
        User_Schema_1.User.deleteOne({ UserId: userId }, function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("User deleted!");
            }
        }).clone();
    }
    findUser(userId) {
        mongoose_1.default.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        return new Promise(async (resolve, reject) => {
            const user_details = User_Schema_1.User.find({ UserId: userId }).clone();
            resolve(user_details);
        });
    }
    async addUser(Flightid, userName, no_of_seats, tripstatus, userid, price) {
        mongoose_1.default.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        const req_user = new User_Schema_1.User({
            Name: userName,
            UserId: userid,
            Booking_Status: "Confirmed",
            FlightId: Flightid,
            Flight_name: app_controller_1.flight_ids[Flightid],
            No_of_seats: no_of_seats,
            Total_Cost: price,
            Trips: tripstatus
        });
        await req_user.save();
        console.log("User added!");
        return req_user;
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map