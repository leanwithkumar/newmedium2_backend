import users from "../Models/users.model.js"
import { validatesignup }  from "../utils/validatesignup.js"
import bcrypt from "bcrypt"

export const signup = async(req, res)=>{
    try{
        const validuser = validatesignup.parse(req.body)
        const existinguser = await users.findOne({email : validuser.email})
        if(existinguser){
            return res.status(400).json({
                message : `${validuser.email} already exists`
            })
        }
        const hashedpassword = await bcrypt.hash(validuser.password, 10)
        const newuser = new users({
            email : validuser.email,
            username : validuser.username,
            password : hashedpassword
        })
        await newuser.save();
        res.status(200).json({
            message : `${validuser.email} registered sucussfully`
        })

    }
    catch(error){
        console.error("Signup Error:", error);
        if (error.name === "ZodError") {
        const messages = error.errors.map(e => e.message);
        return res.status(400).json({
         errors: messages
        });
        }
        res.status(400).json({
            message : "unable to register user"
        })

    }
}