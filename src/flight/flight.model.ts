export class Flight{
    constructor(
        public id: string,
        public from: string,
        public destination: string,
        public date: string,
        public price: number,
        public seats: number,
        public flightno: string,
        public seatno:number,
    ){}
}