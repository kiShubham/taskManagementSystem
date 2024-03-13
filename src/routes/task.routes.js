const router = require("express").Router();

const taskController = require("../controllers/task.controller");
const { authenticateToken } = require("../middlewares/authenticateToken");

router.post("/", authenticateToken, taskController.createTask);
router.get("/", authenticateToken, taskController.getAllTasks);
router.get("/:id", authenticateToken, taskController.getTasksbyId);
router.patch("/:id", authenticateToken, taskController.updateTask);
router.delete("/:id", authenticateToken, taskController.deleteTask);

module.exports = router;
