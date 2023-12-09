import { Schema, model } from 'mongoose';


const taskSchema = new Schema({
  title: {
    type: String, 
    required: true, 
  }, 
  description: {
    type: String, 
  },
  done: {
    type: Boolean, 
    required: true, 
    default: false, 
  }, 
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category_id: {
    type: Schema.Types.ObjectId, 
    ref: 'Category',
    required: true
  }
}, {
  timestamps: true
});


export default model('Task', taskSchema);
