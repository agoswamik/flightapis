import { Module } from "@nestjs/common";
import { FlightController } from "./flights.controller";
import { FlightService } from './flights.service';
import { MongooseModule } from "@nestjs/mongoose";
import { BookFlightSchema, BookingListSchema, FlightAvailabilityListSchema } from './flights.model';

@Module({
    imports: [MongooseModule.forFeature([
            {name : 'BookFlight', schema: BookFlightSchema}, 
            {name : 'BookingList', schema: BookingListSchema}, 
            {name : 'FlightAvailabilityList', schema: FlightAvailabilityListSchema},
    ])],
    controllers: [FlightController],
    providers: [FlightService],
})
export class FlightModule {}