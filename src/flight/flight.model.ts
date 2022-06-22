export class Flight{
    constructor(
        public id: number,
        public from: string,
        public to: string,
        public date: string,
        public price: number,
        public seats: number,
        public company: string,
    ){}
}