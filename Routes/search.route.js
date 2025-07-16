import express from "express"
import { search } from "../Controller/search.controller.js"
const searchroute = express.Router()
searchroute.get('/search', search)
export default searchroute