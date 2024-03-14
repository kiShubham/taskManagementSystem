const Task = require("../models/task.model");

const create = async (data) => {
  try {
    const newTask = await Task.create(data);
    return newTask;
  } catch (error) {
    throw error;
  }
};

const get = async (userId) => {
  try {
    const getTasks = await Task.find({ userId: userId });
    if (!getTasks) throw new Error("userId not valid");
    return getTasks;
  } catch (error) {
    throw error;
  }
};

const getbyId = async (id, userId) => {
  try {
    const getTask = await Task.find({ userId: userId, _id: id });
    return getTask;
  } catch (error) {
    throw error;
  }
};

const update = async (id, userId, updatedData) => {
  try {
    const filter = { _id: id, userId: userId };
    const updateOpertion = { $set: updatedData };
    const options = { new: true };
    const task = await Task.findOneAndUpdate(filter, updateOpertion, options);
    console.log(task);
    return task;
    //
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (id, userId) => {
  try {
    const taskD = await Task.findByIdAndDelete({ _id: id, userId: userId });
    return taskD;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  create,
  get,
  getbyId,
  update,
  deleteTask,
};
