import express from "express"
import { trending } from "../Controller/trending.controller.js"

const trendingroute = express.Router()

trendingroute.get('/trending',trending )
export default trendingroute