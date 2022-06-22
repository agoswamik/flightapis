import {Request,Response} from "express"

interface Book{
    id : number,
    flightNumbers : string[],
    payments : boolean,
    seats : number,
    bookDate : any,
    bookingStatus : string,
    arrivalLocation : string[]
    departureLocation : string,
    arrivalDateandTime : any
    departureDateandTime : any,
    airfareCharges : number,
    tax : any,
    totalCharges : number
  }
  interface FlightAvailability{
    flightNumbers : number,
    availableSeats : number
  }
  const books : Book[] = [
    {id : 1,
     flightNumbers : ['123'],
     payments : true,
     seats : 12,
     bookDate : new Date(),
     bookingStatus : 'Confirmed',
     arrivalLocation : ['Tamil Nadu'],
      departureLocation : 'New Delhi',
      arrivalDateandTime : new Date(),
      departureDateandTime : new Date(),
      airfareCharges : 5000,
      tax : "15%",
      totalCharges : 5750
    },
  
    {id : 2,
      flightNumbers : ['A16Z007'],
      payments : true,
      seats : 2,
      bookDate : new Date(),
      bookingStatus : 'Confirmed',
      arrivalLocation : ['Jammu Kashmir'],
      departureLocation : 'Mumbai, Maharashtra',
      arrivalDateandTime : new Date(),
      departureDateandTime : new Date(),
      airfareCharges : 5000,
      tax : "15%",
      totalCharges : 5750
     }
  ]
  
  const flightAvailable : FlightAvailability[] = [
    {
      flightNumbers : 33770,
      availableSeats : 12
    },
    {
      flightNumbers : 2145,
      availableSeats : 3
    },
    {
      flightNumbers : 7031,
      availableSeats : 10
    },
    {
      flightNumbers : 4509,
      availableSeats : 7
    },
    {
      flightNumbers : 1509,
      availableSeats : 0
    },
    {
      flightNumbers : 2409,
      availableSeats : 0
    }
  ]
  
  // this part of the code is to get the list of all the bookings of a flight.
  const flightBookedList = (req:Request,res:Response) => {
     return res.status(200).send(books)
  }

  // this is used to get the booking details of a user.
  const userBookingList = (req:Request,res:Response) => {
     
     const book = books.find(p => p.id === parseInt(req.params.id))
     return res.status(200).send(book)
  }

    //this part of the code is to get the information of all confirmed bookings.
    const confirmedBooking = (req:Request,res:Response) => {
    let confirmBookedList = [] 
    const confirmStatus = books.filter(c => c.bookingStatus == 'Confirmed')
    
    if(confirmStatus){
      confirmBookedList.push(confirmStatus)
      return res.status(200).send(confirmBookedList)
    }
    else{
      return res.status(404).json({error : "There are any confirmed bookings."})
    }
  }

    //this is to get the pending list of all the bookings.
  
    const pendingList = (req:Request,res:Response) => {
    let pendingBookedList = [] 
    const pendingList = books.filter(p => p.bookingStatus == 'Pending')
    
    if(pendingList){
      pendingBookedList.push(pendingList)
      return res.status(200).send(pendingBookedList)
    }else{
      return res.status(404).json({error : "There is no pending list."})
    }
  }
  
      //this is to get the number of available seats for a flight.
  
      const seatsAvailable = (req:Request,res:Response) => {
      const seatAvailable = flightAvailable.find(obj => obj.availableSeats !== 0)
      const seatUnavailable = flightAvailable.find(obj=> obj.availableSeats === 0)
      
      const flightCheck = flightAvailable.find(obj => obj.flightNumbers === req.body.flightNumbers)
      
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
        flightBook.push(seatAvailable)
        return res.status(200).send(flightBook)
      }else if(!flightCheck){
        flightBook.push(seatUnavailable)
        return res.status(200).send(flightBook)
      }else{
        res.status(404).json({error : "Invalid flight number"})
      }
  }
  
    //this part is for booking an airline ticket.
    const bookedFlight = (req:Request,res:Response) => {
    
      const seatAvailable = books.find((n,index) => {
         return books.find((x,ind) => x.seats === n.seats && index!==ind)
       })
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
                const userInfo = {
                  id : books.length + 1,
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
               books.push(userInfo)
               return res.status(200).send(userInfo)
              
               
            }else if(payment == false && seatAvailable !== req.body.seats){
              
              const userInfo = {
                id : books.length + 1,
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
               books.push(userInfo)
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
    
     const book = books.find(p => p.id == parseInt(req.params.id))
     if(book){
        try{
            const index = books.indexOf(book)
            books.splice(index,1)
            return res.status(200).json({message : "Booking Cancelled successfully"})
   
        }catch(err){
            return res.status(404).json({err : "Invalid Booking number"})
        }
     }
     else{
      res.status(404).json({message : "The booking cannot be confirmed. So it is set to cancel!"})
     }

     }
export default {bookedFlight,cancelBooking,seatsAvailable,pendingList,confirmedBooking,flightBookedList,userBookingList}