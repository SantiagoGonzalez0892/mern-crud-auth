import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import tasksRouter from './routes/tasks.route.js';
import categoriesRoutes from './routes/categories.route.js';

const app = express();


app.set('port', process.env.PORT || 3000);

app.use(cors({ origin: 'http://192.168.100.2:5173', credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', authRouter);
app.use('/api', tasksRouter);
app.use('/api', categoriesRoutes);



export default app;