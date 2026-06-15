import { Task } from '../db/models/Tasks.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.json(task);
};

export const addTask = async (req, res) => {
  const body = req.body;
  const newTask = await Task.create(body);
  res.status(201).json(newTask);
};
