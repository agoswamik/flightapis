"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlightInfo = void 0;
const mongoose_1 = require("mongoose");
const Schema_database_1 = require("../Schema_database");
class getFlightInfo {
    findFlight(Flightid, flight_ids) {
        var flight_name = flight_ids[Flightid];
        mongoose_1.default.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        const FlightStatus = (0, mongoose_1.model)('Flight-Status', Schema_database_1.FlightStatusSchema);
        return new Promise(async (resolve, reject) => {
            const flight_details = FlightStatus.find({ Name: flight_name }).clone();
            resolve(flight_details);
        });
    }
    getSeatInfo() {
        mongoose_1.default.connect('mongodb+srv://Romit1001:DeadfromOutside@cluster0.3sbip.mongodb.net/Flight-Management-System?retryWrites=true&w=majority');
        const FlightStatus = (0, mongoose_1.model)('Flight-Status', Schema_database_1.FlightStatusSchema);
        return new Promise(async (resolve, reject) => {
            const flight_details = FlightStatus.find({}).clone();
            var Seat_array = this.filter_seats(await flight_details.clone());
            resolve(Seat_array);
        });
    }
    filter_seats(flight_details) {
        var result = [];
        for (var i = 0; i < flight_details.length; i++) {
            var flight = { Name: (flight_details[i]).Name,
                No_of_seats: (flight_details[i]).No_of_seats };
            result.push(flight);
        }
        return result;
    }
}
exports.getFlightInfo = getFlightInfo;
//# sourceMappingURL=getFlightInfo.js.map