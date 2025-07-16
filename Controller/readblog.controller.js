import mongoose from "mongoose";
import blogs from "../Models/blogs.model.js";

export const readblog = async (req, res) => {
  try {
    const { blogid } = req.params;

    if (!blogid) {
      return res.status(400).json({ message: "Blog ID is required" });
    }

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(blogid)) {
      return res.status(400).json({ message: "Invalid blog ID format" });
    }

    const blog = await blogs.findById(blogid).populate('author', 'username');

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error in readblog:", error); // helpful debug log
    res.status(500).json({
      message: "Error while fetching blog",
      error: error.message,
    });
  }
};
