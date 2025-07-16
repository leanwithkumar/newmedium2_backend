import express from "express"
import { editblog } from "../Controller/editblog.controller.js"
const editblogroute = express.Router()
editblogroute.put('/editblog/:blogid', editblog)
export default editblogroute