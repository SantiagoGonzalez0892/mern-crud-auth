import jwt from "jsonwebtoken";
import dotenv from 'dotenv';



const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if(!token) return res.status(401).json({ message: 'No token, authorization denied' });

  jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
    if (error) return res.status(403).json({ message: 'Token invalid, authorization denied' });
    req.user = user;
  });
  next();
}


export default authRequired;
