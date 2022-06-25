"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlights = void 0;
const mongoose_1 = require("mongoose");
const Flight_Schema_1 = require("../Schemas/Flight_Schema");
class UpdateFlights {
    updateDeleteBooking(req_user) {
        mongoose_1.default.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        var no_of_seats = req_user.No_of_seats;
        var Flight_name = req_user.Flight_name;
        Flight_Schema_1.FlightStatus.updateOne({ Name: Flight_name }, { $inc: { No_of_seats: no_of_seats } }, function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Done!");
            }
        }).clone();
    }
    updateBookFlight(flight_obj, no_of_seats) {
        var result_seats = flight_obj.No_of_seats - no_of_seats;
        mongoose_1.default.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        Flight_Schema_1.FlightStatus.updateOne({ Name: flight_obj.Name }, { No_of_seats: result_seats }, function (error, result) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Updated successfully!");
            }
        }).clone();
    }
}
exports.UpdateFlights = UpdateFlights;
//# sourceMappingURL=UpdateFlights.js.map