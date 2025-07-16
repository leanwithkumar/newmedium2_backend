import { validtesignin } from "../utils/validatesignin.js";

export const signin = async(req, res) => {
  try {
    const validuser = validtesignin.parse(req.body);
    const verifyuser = await users.findOne({ email: validuser.email });

    if (!verifyuser) {
      return res.status(400).json({
        message: `${validuser.email} does not exist`
      });
    }

    const checkpassword = await bcrypt.compare(validuser.password, verifyuser.password);
    if (!checkpassword) {
      return res.status(400).json({
        message: `Incorrect password entered`
      });
    }

    const token = jwt.sign(
      { id: verifyuser._id, email: verifyuser.email },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    // ✅ Removed res.cookie(...)

    return res.status(200).json({
      message: `${verifyuser.email} successfully logged in`,
      username: verifyuser.username,
      email: verifyuser.email,
      userId: verifyuser._id,
      token // ✅ Send token directly
    });

  } catch (error) {
    if (error.name === "ZodError") {
      const messages = error.errors.map(e => e.message);
      return res.status(400).json({ errors: messages });
    }

    return res.status(400).json({ message: error.message });
  }
};
