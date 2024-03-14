const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    priority: {
      type: String,
      enum: ["High", "Low", "Medium"],
      default: "Low",
    },
    isCompletedTask: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: false }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
