import bodyParser from 'body-parser';
import express from 'express';
import dotenv from "dotenv"
import flightRouter from "./routes/bookRouter"
dotenv.config()
const app = express()
app.use(express.json())
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/flight",flightRouter)

// listening to server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});