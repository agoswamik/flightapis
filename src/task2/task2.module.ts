import { Module } from "@nestjs/common";
import { FlightController } from "./task2.controller";
import { FlightService } from './task2.services';

@Module({
    controllers: [FlightController],
    providers: [FlightService],
})
export class FlightModule {}