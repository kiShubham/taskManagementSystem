require("dotenv").config({ path: "src/.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");

// connection to mongoose
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to DataBase😀");
  })
  .catch((err) => console.log("facing error on connecting DataBase😴", err));

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running");
});

// app.get("/", (req, res) => {
//   res.send("Backend server is running");
// });
