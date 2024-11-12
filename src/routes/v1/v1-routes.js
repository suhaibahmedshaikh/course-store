const { Router } = require("express");
const userRouter = require("./user-routes");
const courseRouter = require("./course-routes");
const adminRouter = require("./admin-routes");

const v1Router = Router();

v1Router.use("/user", userRouter);
v1Router.use("/course", courseRouter);
v1Router.use("/admin", adminRouter);

module.exports = v1Router;
