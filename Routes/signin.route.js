import express from "express"
import { signin } from "../Controller/signin.controller.js"

const signinroute = express.Router()

signinroute.post('/signin', signin)

export default signinroute