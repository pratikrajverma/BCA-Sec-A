import express from "express";
import { login, signup } from "../controller/user.js";
import { dashboard } from "../controller/dashboard.js";
import { auth } from "../middleware/auth.js";

const userRouter = express.Router()

userRouter.post('/signup', signup)


userRouter.post('/login', login)

userRouter.get('/dashboard',  auth , dashboard)

export default userRouter
 