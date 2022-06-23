class BookFlight{
    constructor(
        public id: string,
        public from: string,
        public to: string,
        public date: string,
        public seats: number,
        public flightNumber: string,
        public isBooked: boolean,
        public paymentStatus: string,
        public bookingStatus: string,
    ){}
}

class BookingList{
    constructor(
        public isBookingSuccess: boolean,
        public bookingStatus: string,
        public bookingId: string,
        public bookingDate: string,
        public flightNumber: string,
        public departureAirport: string,
        public arrivalAirport: string,
        public departureDate: string,
        public arrivalDate: string,
        public airfarecharges: number,
        public taxes: number,
        public totalAmount: number,
        
    ) {}
}

class FlightAvailabilityList {
    constructor(
        public flightNumber: string,
        public seats: number
    ) {}
}


export { BookFlight, BookingList, FlightAvailabilityList};

// public isAvailable: boolean,
// public isCancelled: boolean,
// public isDelayed: boolean,
// public isOnTime: boolean,
// public isOnTimeDelayed: boolean,