const express = require("express");
const { PORT } = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");
const apiRouter = require("./routes/api-routes");

const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/api", apiRouter);

// DB Connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});