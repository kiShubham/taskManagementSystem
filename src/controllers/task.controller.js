const taskServices = require("../services/task.service");

const createTask = async (req, res) => {
  try {
    const { title, description, priority, isCompletedTask } = req.body;
    const userId = req.user.id;
    const TaskData = {
      title,
      description,
      priority,
      isCompletedTask,
      userId,
    };
    const task = await taskServices.create(TaskData);
    res.status(201).json({
      message: "new task created",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllTasks = async (req, res) => {
  try {
    // const { userId } = req.body; // we are not sending through frontend ;
    // if (userId !== req.user.id) {
    //   return res
    //     .status(422)
    //     .json({ message: "login Again and you are unathorized " });
    // }
    const userId = req.user.id;
    const getTask = await taskServices.get(userId);
    res.status(200).json(getTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getTasksbyId = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  try {
    const tasks = await taskServices.getbyId(id, userId);
    if (tasks)
      res.status(201).json({
        message: "task fetched",
        tasks,
      });
    else
      res.status(400).json({
        message: "no task found",
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const updatedData = req.body;
    const task = await taskServices.update(id, userId, updatedData);
    if (!task)
      res.status(400).json({
        message: "no task found",
      });
    else res.status(200).json({ message: "update successfull", task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const task = await taskServices.deleteTask(id, userId);
    if (!task)
      res.status(400).json({
        message: "no task found",
      });
    else res.status(200).json({ message: "deleted successfull", task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTasksbyId,
  deleteTask,
  updateTask,
};
