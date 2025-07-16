import express from "express";
import { readblog } from "../Controller/readblog.controller.js";

const readblogroute = express.Router()

readblogroute.get('/readblog/:blogid', readblog)
export default readblogroute