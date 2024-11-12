const User = require("../models/user-model");

const signupUser = async (req, res) => {
  try {
    const { email, password, firstName, secondName } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(409).json({
        message: "user already exits",
      });
    }

    const user = await User.create({
      email: email,
      password: password,
      firstName: firstName,
      secondName: secondName,
    });

    res.status(201).json({
      message: "signup successfully",
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {}
};

const getCourses = async (req, res) => {};

module.exports = {
  signupUser,
  signinUser,
  getCourses,
};
