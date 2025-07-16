import express from "express"
import { publish } from "../Controller/publish.controller.js"

const publishroute = express.Router()

publishroute.post('/publish',publish )
export default publishroute