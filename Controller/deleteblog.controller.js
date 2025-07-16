import blogs from "../Models/blogs.model.js"

export const deleteblog = async(req, res)=>{
    try{
        const blogID = req.params.blogid

        const deleted = await blogs.findByIdAndDelete(blogID)
        if(!deleted){
            return res.status(400).json({
                message : "Unable to delete blog"
            })
        }
        res.status(200).json({
            message : "Blog deleted Successfully"
        })

    }
    catch(error){
        res.status(400).json({
            message : "Unable to delete blog"
        })
    }
}