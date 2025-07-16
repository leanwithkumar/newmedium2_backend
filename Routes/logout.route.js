import express from "express"
import { logout } from "../Controller/logout.controller.js"

const logoutroute = express.Router()
logoutroute.get('/logout', logout)
export default logoutroute