import express from 'express';
import { createTask, getTasks, getTask, deleteTask, updateTask, doneTask } from '../controllers/tasks.controller.js';
import authRequired from '../middlewares/validateToken.js';


const router = express.Router();


router.post('/tasks', authRequired, createTask)
router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);
router.delete('/tasks/:id', authRequired, deleteTask);
router.put('/tasks/:id', authRequired, updateTask);
router.put('/tasks/:id/done', authRequired, doneTask);



export default router;
