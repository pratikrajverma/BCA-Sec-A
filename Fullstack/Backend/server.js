import express from "express";
const app = express()
import connectDB from "./database/mongodb.js";
import userRouter from "./routes/userRouter.js";
import marksRouter from "./routes/marksRoutes.js";
import cors from 'cors'

app.use(cors({
    origin: "*"
}))

app.use(express.json())

app.use(userRouter)

app.use(marksRouter)

connectDB()


const port = 3000


app.listen(port, ()=>{
    console.log('server has started at port : ', port)
})