import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/Users.js";

const JWT_SECRET = process.env.SECRET_KEY || "secretkey";

const signToken = (id) => jwt.sign({ id }, JWT_SECRET, { expiresIn: "24h" });

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(409).json({ message: "User already exists!" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashed });

    const token = signToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60,
    });

    res.status(201).json({
      message: "Registered",
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    console.log("Register User", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({ message: "All fields are required!" });
    }

    const user = await User.findOne({ email });
    if (!user) res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) res.status(401).json({ message: "Invalid credentials" });

    const token = signToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60,
    });

    return res.json({
      message: "Logged in",
      user: { id: user._id, name: user.name },
    });
  } catch (err) {
    console.log("Login Error", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};
