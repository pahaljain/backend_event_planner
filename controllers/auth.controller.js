import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User Not Found, Please SignUp" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Respond with user data
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
