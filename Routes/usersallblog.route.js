import express from "express"
import { usersblog } from "../Controller/usersblog.controller.js"

const usersallblogroute = express.Router()
usersallblogroute.get('/usersblog/:userID', usersblog)
export default usersallblogroute