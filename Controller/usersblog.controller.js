import blogs from "../Models/blogs.model.js";

export const usersblog = async (req, res) => {
  try {
    const { userID } = req.params;

    if (!userID) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const userBlogs = await blogs.find({ author: userID }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "User's blogs fetched successfully",
      blogs: userBlogs,
    });
  } catch (error) {
    res.status(400).json({
      message: "Unable to get user's blogs",
      error: error.message,
    });
  }
};
