import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  const token = req.cookies.medium2;

  console.log("🍪 Cookie Token Received:", token); // ✅ DEBUG LOG

  if (!token) {
    return res.status(400).json({
      message: "You have Signed Out (token missing)",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("✅ Token Decoded:", decoded); // ✅ DEBUG LOG

    req.user = decoded;
    next();
  } catch (error) {
    console.log("❌ Token verification failed:", error.message);
    return res.status(400).json({
      message: "Invalid token",
    });
  }
};
