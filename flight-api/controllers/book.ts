import {Request,Response} from "express"
import { Book,UserInput,FlightAvailable,flightInput} from "../models/flightDB"

  // this part of the code is to get the list of all the bookings of a flight.
  const flightBookedList = async (req:Request,res:Response) => {
     const books = await Book.find()
     return res.status(200).json(books)
     
  }
  const flightListAvailable = async(req:Request,res:Response) => {
    const flights = await FlightAvailable.find()
    return res.status(200).json(flights)
  }
  // this is used to get the booking details of a user.
  const userBookingList = async (req:Request,res:Response) => {
     const bookId = req.params.id
     const book = await Book.findById(bookId)
     if(book){
      res.json(book)
     }
  }

    //this part of the code is to get the information of all confirmed bookings.
    const confirmedBooking = async (req:Request,res:Response) => {
    let confirmBookedList = []
    
    const confirmStatus = await Book.find({"bookingStatus" : "Confirmed"})
   try{
    if(confirmStatus){
      confirmBookedList.push(confirmStatus)
      return res.status(200).json(confirmBookedList)
    }
    else{
      return res.status(404).json({error : "There are any confirmed bookings."})
    }
   }catch(err){
      res.status(500).json({err : "Server error"})
   }
   
  }

    //this is to get the pending list of all the bookings.
  
    const pendingList = async (req:Request,res:Response) => {
    let pendingBookedList = [] 
    const pendingList = await Book.find({"bookingStatus" : "Pending"})
    
    if(pendingList){
      pendingBookedList.push(pendingList)
      return res.status(200).send(pendingBookedList)
    }else{
      return res.status(404).json({error : "There is no pending list."})
    }
  }
  
      //this is to get the number of available seats for a flight.
  
      const seatsAvailable = async(req:Request,res:Response) => {
      const seatAvailable = FlightAvailable.find({availableSeats : {$ne : 0}})
      const seatUnavailable = FlightAvailable.find({availableSeats : {$eq : 0}})
      const flightNumbers = req.params.id
      const flightCheck = await FlightAvailable.findById(flightNumbers)
      
      let flightBook = []
      const flightsAvailable = {
        flightNumbers : req.body.flightNumbers,
        availableSeats : seatAvailable
      } 
      const flightUnavailable = {
        flightNumbers : req.body.flightNumbers,
        availableSeats : seatUnavailable
      }
      if(flightCheck){
        
        return res.status(200).json(flightCheck)
      }else if(!flightCheck){
        flightBook.push(seatUnavailable)
        return res.status(200).json(flightBook)
      }else{
        res.status(404).json({error : "Invalid flight number"})
      }
  }
  
    //this part is for booking an airline ticket.
    const bookedFlight = (req:Request,res:Response) => {
      const seatAvailable = Book.find(({seats : {"eq" : req.body.seats}}))
     
      const payment = req.body.payments
      const date : Date = new Date()
  
      const airfarePrice = req.body.airfareCharges
      const tax = 15
      const totalAmount = airfarePrice + (tax / 100) * airfarePrice
  
      try{
          if(seatAvailable == req.body.seats){
              return res.status(400).json({error:"The flight is already booked"})
          }else{
            try{
              if(payment == true && seatAvailable !== req.body.seats){
                const user : UserInput = {
                  
                  flightNumbers : req.body.flightNumbers,
                  payments : payment,
                  seats : req.body.seats,
                  bookDate : new Date(),
                  bookingStatus : 'Confirmed',
                  arrivalLocation : req.body.arrivalLocation,
                  departureLocation : req.body.departureLocation,
                  arrivalDateandTime : date.toString(),
                  departureDateandTime : date.toString(),
                  airfareCharges : airfarePrice,
                  tax : tax,
                  totalCharges : totalAmount
               }
               const books = Book.create(user)
               return res.status(200).json({data : books})
              
               
            }else if(payment == false && seatAvailable !== req.body.seats){
              
              const user : UserInput = {
                
                flightNumbers : req.body.flightNumbers,
                payments : payment,
                seats : req.body.seats,
                bookDate : new Date(),
                bookingStatus : 'Pending',
                arrivalLocation : req.body.arrivalLocation,
                departureLocation : req.body.departureLocation,
                arrivalDateandTime : date.toString(),
                departureDateandTime : date.toString(),
                airfareCharges : airfarePrice,
                tax : tax,
                totalCharges : totalAmount
  
               }
               const books = Book.create(user)
               return res.status(404).json({message : "The booking is in pending. Please Check again"})
            }
            else{
               return res.status(500).json({err : "Server error"})
            }
          }
          catch(err){
              
          }
           return res.status(200).json({success : "Yes the flight is available"})
        }
        
   }catch(err){
      res.status(500).send(err)
   }  
  }
  
    //delete the booking of the flight ticket.
    const cancelBooking = (req:Request,res:Response) => {
     const book = Book.findById(req.params.id)
     
     if(book){
        try{
            book.remove()
            return res.status(200).json({message : "Booking Cancelled successfully"})
   
        }catch(err){
            return res.status(404).json({err : "Invalid Booking number"})
        }
     }
     else{
      res.status(404).json({message : "The booking cannot be confirmed. So it is set to cancel!"})
     }

     }
export default {bookedFlight,flightListAvailable,cancelBooking,seatsAvailable,pendingList,confirmedBooking,flightBookedList,userBookingList}