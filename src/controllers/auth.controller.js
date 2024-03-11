const authServices = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await authServices.registerUser(userData);

    //Registration is successful
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register };
