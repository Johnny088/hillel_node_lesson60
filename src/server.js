import express from 'express';
import 'dotenv/config';
import { connectDb } from './db/connectDb.js';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

await connectDb();

app.listen(PORT, () => {
  console.log('server is running');
});
