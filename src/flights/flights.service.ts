import { Injectable, NotFoundException } from '@nestjs/common';
import { BookFlight, BookingList, FlightAvailabilityList } from './flights.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FlightService{

    flights: BookFlight[] = [];
    getbooklist: BookingList[];
    flightAvList: FlightAvailabilityList[];

    constructor(@InjectModel('BookFlight') private readonly flightModel: Model<BookFlight>,
                @InjectModel('FlightAvailabilityList') private readonly FlightAvailabilityListModel: Model<FlightAvailabilityList>
    ){}
    

    async bookFlight(from: string, to: string, date: string, seats: number, flightNumber: string, isBooked: boolean, paymentStatus: string){
        let uid = Math.random().toString(26).slice(2);
        let bookingStatus = 'NotConfirmed';
        // Assuming there are seats available
        // Checking if the seats are available will be added soon!
        if (paymentStatus === 'Paid') bookingStatus = 'Confirmed'; 
        else if (paymentStatus === 'NotPaid' || paymentStatus === 'Cancelled' || paymentStatus === 'DeniedByBank' || paymentStatus === 'Failed'){
            bookingStatus = 'NotConfirmed';
        }
        const newBooking = new this.flightModel({uid,from,to,date,seats,flightNumber,isBooked,bookingStatus,paymentStatus});
        const res = await newBooking.save();
        return {uid: uid, resID: res.id, bookingStatus: bookingStatus};
    }

    async cancelFlight(id: string){
        try {
            await this.flightModel.findByIdAndDelete(id);
            return "Booking cancelled!"
        }
        catch(error){
            return "Booking not found!";
        }
    }


    async getbookingList(bookingStatus: string){
        const getBooking = await this.flightModel.find({bookingStatus: bookingStatus}).exec()
        return getBooking.map(item => ({
            id: item.id,
            from: item.from,
            to: item.to,
            date: item.date,
            seats: item.seats,
            flightNumber: item.flightNumber,
            isBooked: item.isBooked,
            bookingStatus: item.bookingStatus,
            paymentStatus: item.paymentStatus,

        }));
    }

    async getFlightAvailability(flightNumber: string){
        const getFlightAv = await this.FlightAvailabilityListModel.find({flightNumber: flightNumber}).exec()
        return getFlightAv.map(item => ({
            flightNumber: item.flightNumber,
            seats: item.seats,
        }));
    }

    async getUserBookings(id: string){
        let getUserBookings;
        try {
            getUserBookings = await this.flightModel.find({uid: id}).exec()
        }
        catch(error){
            throw new NotFoundException('Booking not found for this user!');
        }
        return getUserBookings.map(item => ({
            id: item.id,
            from: item.from,
            to: item.to,
            date: item.date,
            seats: item.seats,
            flightNumber: item.flightNumber,
            isBooked: item.isBooked,
            bookingStatus: item.bookingStatus,
            paymentStatus: item.paymentStatus,
        }));
    }
}