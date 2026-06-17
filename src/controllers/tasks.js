// import createHttpError from 'http-errors';
import { Task } from '../db/models/Tasks.js';
import { idNotFound } from '../constants.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task) {
    res.status(404).json(idNotFound);
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
    res.status(404).json(idNotFound);
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
    // throw createHttpError(404, idNotFound);
    res.status(404).json(idNotFound);
  }
  res.json(result);
};

// export const updateOrCreateTask = async (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   const result = await Task.findByIdAndUpdate(id, body, {
//     returnDocument: 'after',
//     upsert: true,
//     includeResultMetadata: true,
//   });
//   const isUpdated = result.lastErrorObject.updatedExisting;
//   res.status(isUpdated ? 200 : 201).json(result.value);
// };
