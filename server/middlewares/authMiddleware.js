import jwt from 'jsonwebtoken';
import User from '../models/Users.js';

const SECRET_KEY = process.env.JWT_SECRET;

const protect = async (req, res, next) => {
  try{
    let token = req.cookies?.token;

    if(!token) {
      return res.status(401).json({message: "Not authorized, token missing!"});
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    if(!decoded) return res.status(401).json({message: "Invalid token!"});

    const user = await User.findById(decoded.id).select('-password');
    if(!user) return res.status(401).json({message: "User not found"});

    req.user=user;
    next();
  } catch(err) {
    console.log("Auth middleware: ", err);
    return res.status(401).json({message: "Not authorized!"});
  }
}

export default protect;