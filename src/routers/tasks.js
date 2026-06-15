import { Router } from 'express';
import 'dotenv/config';
import { addTask, getTaskById, getTasks } from '../controller/tasks.js';

const tasksRouter = Router();

tasksRouter.get('/tasks', getTasks);

tasksRouter.get('/tasks/:id', getTaskById);

tasksRouter.post('/tasks', addTask);

export default tasksRouter;
