import express from 'express'
import { createMarks, showMarks } from '../controller/marks.js'

const marksRouter = express.Router()

marksRouter.post('/marks',  createMarks)


marksRouter.get('/marks', showMarks)

export default marksRouter