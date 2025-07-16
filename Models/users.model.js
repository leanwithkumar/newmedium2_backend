import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        
    },
    password : {
        type : String,
        required : true
    }
})

const users = mongoose.model("users", usersSchema)
export default users;