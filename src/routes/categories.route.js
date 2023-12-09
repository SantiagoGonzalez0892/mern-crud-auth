import express from 'express';
import { getCategories, createCategory } from '../controllers/categories.controller.js';
import authRequired from '../middlewares/validateToken.js';

const router = express.Router();


router.post('/categories', authRequired, createCategory);
router.get('/categories', authRequired, getCategories);


export default router;
