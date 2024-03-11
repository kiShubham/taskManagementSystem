require("dotenv").config({ path: "src/.env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/auth.routes");

const PORT = process.env.PORT || 5000;

// connection to mongoose
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to DataBase😀");
  })
  .catch((err) => console.log("facing error on connecting DataBase😴", err));

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.listen(PORT, () => {
  console.log("server is running");
});
