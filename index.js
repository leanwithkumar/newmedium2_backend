import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import databaseconnection from "./Models/databaseconnection.js";
import signuproute from "./Routes/signup.route.js";
import signinroute from "./Routes/signin.route.js";
import publishroute from "./Routes/publish.route.js";
import deleteblogroute from "./Routes/deleteblog.route.js";
import trendingroute from "./Routes/trending.route.js";
import logoutroute from "./Routes/logout.route.js";
import usersallblogroute from "./Routes/usersallblog.route.js";
import readblogroute from "./Routes/readblog.route.js";
import editblogroute from "./Routes/editblog.route.js";
import searchroute from "./Routes/search.route.js";
import { auth } from "./Middlewear/auth.js";



const app = express();
const port = process.env.PORT

const allowedOrigins = [
  "http://localhost:5173",          // Local development
  "https://medium2-new.vercel.app"  // Production
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json())
app.use(cookieParser())



app.use('/', signuproute)
app.use('/', signinroute)

app.use('/', readblogroute)
app.use('/',auth, publishroute)
app.use('/',auth, deleteblogroute)
app.use('/',auth, trendingroute)
app.use('/',auth, logoutroute)
app.use('/',auth, usersallblogroute)
app.use('/',auth, editblogroute)
app.use('/',auth, deleteblogroute)
app.use('/',auth, searchroute)





databaseconnection()
.then(()=>{
    app.listen(port, ()=> console.log(`Medium2 backend is listening at port ${port}`));
})
.catch((error)=>{
    console.log(error.message)
})
