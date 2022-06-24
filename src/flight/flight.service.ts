import { Injectable, NotFoundException } from "@nestjs/common";
import { Flight } from './flight.model';
import {v4 as uuidv4} from 'uuid';
import { InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()

export class FlightService{
    private flight: Flight[] = [];

constructor(@InjectModel('Flight') private readonly flightModel: Model<Flight>,){}

    async bookFlight(from: string, to: string, date: string, price: number, seats: number, company: string){
        let myuuid = uuidv4();
        const newFlight = new this.flightModel({myuuid, from, to, date, price, seats, company});
        const result = await newFlight.save();
        return result.id;
    }
    async cancelFlight(flightId: string){
        await this.flightModel.deleteOne({_id: flightId}).exec();
    }
    async getBookingList(){
        const flight = await this.flightModel.find().exec();
        return flight.map(item => ({
            id: item.id,
            from: item.from,
            to: item.to,
            price: item.price,
            seats: item.seats,
            date: item.date,
            company: item.company,
        }));
    }
    async getFlightAvailability(from: string, to: string, date: string, company: string){
        const index = await this.flight.findIndex(item => item.from === from && item.to === to && item.date === date && item.company === company);
        const flight = this.flight[index];
        if(!flight){
            throw new NotFoundException('Could not find');
        }
        return this.flight[index];
    }
    async getUserBooking(id: string){
        const flight = await this.findID(id);
        return flight;
    }
    private async findID(id: string): Promise<Flight> {
        let flight;
        try{
            flight = await this.flightModel.findById(id).exec();
        }catch(error){
            throw new NotFoundException('Could not find');
        }
        if(!flight){
            throw new NotFoundException('Could not find');
        }
        return flight;
    }
}