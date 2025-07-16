import mongoose from "mongoose";

const databaseconnection = async()=>{
    try{
      await mongoose.connect(process.env.MONGODB);
      console.log("databse connected")

    }
    catch(error){
        console.log("unable to connect dataabse", error.message)
    }
}
export default databaseconnection