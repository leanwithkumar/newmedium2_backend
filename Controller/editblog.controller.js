import blogs from "../Models/blogs.model.js";

export const editblog = async (req, res) => {
  try {
    const { blogid } = req.params;
    const { title, content, tags } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const updatedBlog = await blogs.findByIdAndUpdate(
      blogid,
      {
        title,
        content,
        tags,
      },
      { new: true } 
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating blog",
      error: err.message,
    });
  }
};
