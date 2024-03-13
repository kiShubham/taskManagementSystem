const User = require("../models/user.model");
const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (userData) => {
  try {
    const existingUser = await User.find({ email: userData.email });
    if (existingUser) {
      throw new Error("user Already exist");
    }

    // * const user = await User.create(userData); // we cant use this because it create and save the data simaultaneosly , so we cant update password or any otherthing we wanted , before saving
    const user = new User(userData); // we first create a new user
    const salt = await brcypt.genSalt(10);
    const hashedPassword = await brcypt.hash(userData.password, salt);

    user.password = hashedPassword; // storing hashedpassword ;// modifying the user Password

    await user.save(); // saving to database ;

    return user;
  } catch (error) {
    throw error;
  }
};
const login = async (userData) => {
  try {
    const { username, password } = userData;

    const getUser = await User.findOne({ username: username });
    if (!getUser) throw new Error("user didn't exist");

    const bool = await getUser.comparePasswords(password); // check usermodel.js
    if (!bool) throw new Error("invaid password");

    const token = jwt.sign({ id: getUser._id }, process.env.JWT_Secret);

    return { token, getUser };
    //
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser, login };

/*  

if (getUser) {
      const boolean = await brcypt.compare(password, getUser.password);
      if (boolean) {
        return { boolean, getUser };
      } else throw new Error("invaid password");
    } else throw new Error("user didn't exist");

*/
