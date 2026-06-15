import { Router } from 'express';
import 'dotenv/config';

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const tasksRouter = Router();
