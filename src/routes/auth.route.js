import express from 'express';
import { register, login, logout, verifyToken } from '../controllers/auth.controller.js'
import validateSchema from '../middlewares/validateSchema.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';


const router = express.Router();


router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.get('/logout', logout);

router.get('/verifyToken', verifyToken);



export default router;
