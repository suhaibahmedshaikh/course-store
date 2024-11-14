const { Router } = require("express");

const userRouter = Router();

const {
  signupUser,
  signinUser,
  getCourses,
} = require("../../controllers/user-controller");

const validate = require("../../middlewares/validate-middleware");

const signupSchema = require("../../utils/auth-validator");

userRouter.post("/signup", validate(signupSchema), signupUser);

userRouter.post("/signin", signinUser);

userRouter.get("/my-courses", getCourses);

module.exports = userRouter;
