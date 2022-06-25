export class Flight{
    constructor(
        public id: string,
        public fare: number,
        public source: string,
        public destination: string,
        public seatno:number,
        public seats: number,
        public flightno: string,
        public date: string,
    ){}
}