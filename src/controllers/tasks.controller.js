import CategoryModel from "../models/Category.model.js";
import TaskModel from "../models/Task.model.js";



export const createTask = async (req, res) => {
  try {
    const newTask = new TaskModel({...req.body, user_id: req.user.id});
    await newTask.save();

    const tasksList = await TaskModel.find({ user_id: req.user.id }).populate('category_id');
    res.json(tasksList);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

export const getTasks = async (req, res) => {
  try {
    const tasksList = await TaskModel.find({ user_id: req.user.id }).populate('category_id');
    return res.json(tasksList);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
}

export const getTask = async (req, res) => {
  try {
    const taskFound = await TaskModel.findById(req.params.id);
    if (!taskFound) return res.status(400).json({ message: 'Task not found' });
    
    res.json(taskFound);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
}

export const deleteTask = async (req, res) => {
  try {
    const taskFound = await TaskModel.findById(req.params.id);
    if (!taskFound) return res.status(400).json({ message: 'Task not found' });

    const taskDeleted = await TaskModel.findByIdAndDelete(req.params.id);
    res.json(taskDeleted);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error });
  }
}

export const updateTask = async (req, res) => {
  try {
    const taskFound = await TaskModel.findById(req.params.id);
    if (!taskFound) return res.status(400).json({ message: 'Task not found' });

    await TaskModel.findByIdAndUpdate(req.params.id, {...req.body, user_id: req.user.id}, { new: true })

    const tasksList = await TaskModel.find().populate('category_id');
    res.json(tasksList);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

export const doneTask = async (req, res) => {
  try {
    const taskFound = await TaskModel.findById(req.params.id);
    if (!taskFound) return res.status(400).json({ message: 'Task not found' });
    
    await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    const tasksList = await TaskModel.find({ user_id: req.user.id }).populate('category_id');
    res.send(tasksList);
  } catch (error) {
    res.status(400).json({ message: error });
  }
} 