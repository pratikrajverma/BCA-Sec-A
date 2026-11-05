import express from "express";
import { createUser, readUser } from "../controller/user.js";
const router = express.Router()


router.post('/user', createUser)

router.get('/user', readUser)

export default router