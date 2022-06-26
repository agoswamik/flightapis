import express from "express";
import controller from "../controllers/book"

const router = express.Router()

router.post('/api/create',controller.bookedFlight)
router.get("/api/all",controller.flightBookedList)
router.get("/api/flights",controller.flightListAvailable)
router.get("/api/all/:id",controller.userBookingList)
router.get("/api/confirmed",controller.confirmedBooking)
router.get("/api/pending",controller.pendingList)
router.get("/api/flights/:id",controller.seatsAvailable)
router.delete("/api/:id",controller.cancelBooking)

export default router