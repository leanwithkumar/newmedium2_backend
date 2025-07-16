// middlewear/auth.js

import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized: Token missing or malformed",
    });
  }

  const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
  console.log("🔒 Token Received from Header:", token);

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("✅ Token Decoded:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    console.log("❌ Token verification failed:", error.message);
    return res.status(401).json({
      message: "Unauthorized: Invalid token",
    });
  }
};
