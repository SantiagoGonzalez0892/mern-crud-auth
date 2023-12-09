import { Schema, model } from "mongoose";


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  }, 
  email: {
    type: String, 
    required: true, 
    unique: true,
    trim: true
  }, 
  password: {
    type: String, 
    required: true
  }, 
  avatar: {
    type: String, 
    required: true,
    default: 'avatar1'
  }
}, {
  timestamps: true
});

export default model('User', userSchema);
