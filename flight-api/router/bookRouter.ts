import express from "express";
import bookTicket from "../controllers/book";
//import controller from '../controllers/book'
const router = express.Router()

router.post("/create/book",bookTicket)

export default router
