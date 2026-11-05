import express from "express";
import { createUser, deleteUser, readUser, updateUser } from "../controller/user.js";
const router = express.Router()


router.post('/user', createUser)

router.get('/user', readUser)


router.put('/user/:id', updateUser)


router.delete('/user/:id', deleteUser)

export default router 