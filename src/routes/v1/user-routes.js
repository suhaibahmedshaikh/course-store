const { Router } = require("express");

const userRouter = Router();

const {
  signupUser,
  signinUser,
  getCourses,
} = require("../../controllers/user-controller");

userRouter.post("/signup", signupUser);

userRouter.post("/signin", signinUser);

userRouter.get("/my-courses", getCourses);

module.exports = userRouter;
