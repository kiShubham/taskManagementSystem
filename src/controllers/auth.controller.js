const authServices = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await authServices.registerUser(userData);

    res.status(201).json({
      message: "User registered successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const userData = req.body;

    const check = await authServices.login(userData);
    res.status(200).json({
      meassage: "user loggedIn successfully",
      token: check.token,
      user: check.getUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const someData = async (req, res) => {
  res.send({ message: "hi there trying to get some data" });
};

module.exports = { register, login, someData };
