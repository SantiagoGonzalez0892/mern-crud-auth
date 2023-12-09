import bcrypt from 'bcrypt';
import UserModel from "../models/User.model.js";
import createAccessToken from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();



export const register = async (req, res) => {
  const { username, email, password, avatar } = req.body;

  try {
    const userFound = await UserModel.findOne({ email });
    if (userFound) return res.status(400).json({ message: 'Email is already registered' });

    const hash = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username, 
      email,
      avatar,
      password: hash
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved.id });
    
    res.cookie('token', token)
    res.send({
      id: userSaved.id, 
      username: userSaved.username, 
      email: userSaved.email, 
      avatar: userSaved.avatar
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await UserModel.findOne({ email });
    if (!userFound) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });
    
    const token = await createAccessToken({ id: userFound.id });
    res.cookie('token', token);
    res.json({
      id: userFound.id, 
      username: userFound.username, 
      email: userFound.email, 
      avatar: userFound.avatar, 
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export const logout = (req, res) => {
  res.cookie('token', '', {
    expiresIn: new Date(0)
  });
  res.sendStatus(200);
}

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, process.env.SECRET_KEY, async (error, user) => {
    if (error) return res.status(401).json({ message: 'Unauthorized' });

    const userFound = await UserModel.findById(user.id);
    if (!userFound) return res.status(401).json({ message: 'Unauthorized' });

    res.json({
      id: userFound.id, 
      username: userFound.username, 
      email: userFound.email,
      avatar: userFound.avatar
    });
  });
}
