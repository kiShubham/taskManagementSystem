const User = require("../models/user.model");

const registerUser = async (userData) => {
  try {
    const user = new User(userData);

    await user.save();
    return { user };
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser };
