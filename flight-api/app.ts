import bodyParser from 'body-parser';
import express from 'express';
import dotenv from "dotenv"
import {Request,Response} from "express"
dotenv.config()
const app = express()
app.use(express.json())
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

interface Book{
  id : number,
  flightNumbers : string[],
  payments : boolean,
  seats : number,
  bookDate : any,
  bookingStatus : string[]
}
interface FlightDetails extends Book{
  arrivalLocation : string[]
  departureLocation : string,
  arrivalDate : any
  departureDate : any
}
const books : Book[] = [
  {id : 1,
   flightNumbers : ['123'],
   payments : true,
   seats : 12,
   bookDate : new Date(),
   bookingStatus : ['Confirmed']
  },
  {id : 2,
    flightNumbers : ['A16Z007'],
    payments : true,
    seats : 2,
    bookDate : new Date(),
    bookingStatus : ['Confirmed']
   }
]

// this part of the code is to get the list of all the bookings of a flight.
app.get("/api/all",(req:Request,res:Response) => {
   return res.status(200).send(books)
})
app.get("/api/confirmed",(req:Request,res:Response) => {
   for(var status=0;status <= books.length;status++){
    const confirmStatus = books.filter(status => status.bookingStatus === ['Confirmed'])
    
   }
   if(confirmStatus){
    return res.status(200).send(confirmbooked)
   }
   else{
    return res.status(404).json({error : "There isn't any confirmed booking"})
   }
})
// this part is for booking an airline ticket.
app.post('/api/create',(req:Request,res:Response) => {

 const seatAvailable = books.find((n,index) => {
    return books.find((x,ind) => x.seats === n.seats && index==ind)
 })
 const payment = req.body.payments
 //const bookedStatus : string[] = ['Confirmed','Pending','Cancelled']

 try{
     if(seatAvailable == req.body.seats){
         return res.status(400).json({error:"The flight is already booked"})
      }else{
        try{
          if(payment == true && seatAvailable !== req.body.seats){
            const userInfo = {
              id : books.length + 1,
              flightNumbers : req.body.flightNumbers,
              payments : payment,
              seats : req.body.seats,
              bookDate : new Date(),
              bookingStatus : ['Confirmed']
             }
             books.push(userInfo)
             return res.status(200).send(userInfo)
            
             
          }else if(payment == false && seatAvailable !== req.body.seats){
            
            const userInfo = {
              id : books.length + 1,
              flightNumbers : req.body.flightNumbers,
              payments : payment,
              seats : req.body.seats,
              bookDate : new Date(),
              bookingStatus : ['Pending']
             }
             books.push(userInfo)
            return res.status(404).json({message : "The booking is in pending. Please Check again"})
          }else{
             return res.status(500).json({err : "Server error"})
          }
        }catch(err){
            
        }
         return res.status(200).json({success : "Yes the flight is available"})
      }
      
 }catch(err){
    res.status(500).send(err)
 }  
})

// delete the booking of the flight ticket.
app.delete("/api/:id",(req:Request,res:Response) => {
   const book = books.find(p => p.id == parseInt(req.params.id))
   if(!book){
     return res.status(404).json({error : "Invalid Booking number"})
   }
   else if(book){
    const index = books.indexOf(book)
    books.splice(index,1)
    return res.status(200).json({message : "Booking Cancelled successfully"})
 
   }
   else{
    res.status(404).json({message : "The booking cannot be confirmed. So it is set to cancel!"})
   }
   })


// listening to server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});