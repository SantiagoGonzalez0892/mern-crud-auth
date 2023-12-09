import { Schema, model } from 'mongoose';


const CategorySchema = new Schema({
  name: {
    type: String, 
    required: true
  }, 
  user_id: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  }, 
  themeColor: {
    type: String,
    required: true, 
    default: 'blue'
  }, 
  bgColor: {
    type: String,
    required: true, 
    default: 'rgba(52, 152, 219, .6)'
  }, 
  textColor: {
    type: String,
    required: true, 
    default: 'rgba(52, 152, 219, 1.0)'
  }
});


export default model('Category', CategorySchema);
