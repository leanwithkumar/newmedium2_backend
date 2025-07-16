import express from "express"
import { deleteblog } from "../Controller/deleteblog.controller.js";

const deleteblogroute = express.Router()
deleteblogroute.delete('/delete/:blogid',deleteblog )
export default deleteblogroute;