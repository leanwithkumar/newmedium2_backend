import blogs from "../Models/blogs.model.js"

export const publish = async(req, res)=>{
    try{
        const {title , content, tags,  userID} = req.body
        if(!title || !content || !userID || !tags){
            return res.status(400).json({
                message : "All fields are required"
            })
        }
        const newblog = new blogs({
            title : title,
            content : content,
            tags : tags,
            author : userID
        })
        await newblog.save()
        res.status(200).json({
            message : "Blog Added Successfully"
        })

    }
    catch(error){
        res.status(400).json({
            message : "Unable to add the blog",
            error : error.message
        })
        
    }
}