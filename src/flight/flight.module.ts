import { Module } from "@nestjs/common";
import { FlightController } from "./flight.controller";
import { FlightService } from './flight.service';
import { MongooseModule } from "@nestjs/mongoose";
import { FlightSchema } from './flight.model';

@Module({
    imports: [MongooseModule.forFeature([{name : 'Flight', schema: FlightSchema}])],
    controllers: [FlightController],
    providers: [FlightService],
})
export class FlightModule {}