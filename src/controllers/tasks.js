import { Task } from '../db/models/Tasks.js';
import { idNotFound } from '../constants.js';
import createHttpError from 'http-errors';

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task) {
    createHttpError(404, idNotFound);
    return;
  }

  res.json(task);
};

export const addTask = async (req, res) => {
  const body = req.body;
  const newTask = await Task.create(body);
  res.status(201).json(newTask);
};

export const removeTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);

  if (!task) {
    createHttpError(404, idNotFound);
    return;
  }

  res.json(task);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = await Task.findByIdAndUpdate(id, body, {
    returnDocument: 'after',
  });
  if (!result) {
    createHttpError(404, idNotFound);
  }
  res.json(result);
};
