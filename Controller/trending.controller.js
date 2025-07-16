import blogs from "../Models/blogs.model.js";

export const trending = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  try {
    const trending = await blogs
      .find()
      .populate("author", "username") // Include only username of author
      .sort({ createdAt: -1 })        // Newest first
      .skip(skip)
      .limit(limit);

    res.status(200).json(trending);
  } catch (err) {
    res.status(500).json({ message: "Error fetching trending blogs", error: err.message });
  }
};
