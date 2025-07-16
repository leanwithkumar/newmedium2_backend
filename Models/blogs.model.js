import mongoose from "mongoose";

const blogsSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    tags : {
        type : [String],
        required : true
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    }
},{
    timestamps : true
}
)

const blogs = mongoose.model("blogs", blogsSchema)
export default blogs