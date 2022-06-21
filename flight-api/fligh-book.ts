import express, {Request,Response} from "express"
import BookTicket from "./book.interface"

class BookingController{
    public path = "/posts"
    public router = express.Router()

    private book : BookTicket[] = [
        {
            bookDate : 22-10-22,
            seatBooked : 2,
            flightNumbers : ['2210','2230'],
            payment : true
        }
    ]
    /**
     *
     */
    constructor() {
        this.routes()
        
    }
    public routes(){
        this.router.post(this.path,this.bookTicket)
    }

    bookTicket = (request : Request,response : Response) => {
        const post : BookTicket = request.body
        this.book.push(post)
        response.send(post)
    }
}
export default BookingController