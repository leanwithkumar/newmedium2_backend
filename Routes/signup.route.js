import express from "express"
import  { signup } from "../Controller/signup.controller.js"

const signuproute = express.Router()

signuproute.post('/signup',signup)

export default signuproute