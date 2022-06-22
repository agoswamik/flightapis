import express from "express";
import controller from "../controllers/book"

const router = express.Router()

router.post('/api/create',controller.bookedFlight)
router.get("/api/all",controller.flightBookedList)
router.get("/api/all/:id",controller.userBookingList)
router.get("/api/all/Confirmed",controller.confirmedBooking)
router.get("/api/all/Pending",controller.pendingList)
router.get("/api/all/flightNumbers",controller.seatsAvailable)
router.delete("/api/:id",controller.cancelBooking)

export default router