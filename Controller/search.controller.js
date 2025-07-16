import blogs from "../Models/blogs.model.js";

export const search = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    const results = await blogs
      .find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { tags: { $regex: query, $options: "i" } }
        ]
      })
      .populate("author", "username") // fetch username of author
      .sort({ createdAt: -1 });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      message: "Failed to search blogs",
      error: error.message,
    });
  }
};
