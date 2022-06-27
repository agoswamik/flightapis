export class Flight {
    constructor(
        public id: string, 
        public to: string, 
        public from: string, 
        public price: number, 
        public date: string,
        public seats: number,
        ) {}
}
