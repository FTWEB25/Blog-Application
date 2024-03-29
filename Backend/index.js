const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connection = require("./config/db");
const userRouter = require("./routes/user.routes");
const blogRouter = require("./routes/blog.routes");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/blogs",blogRouter)

app.listen(process.env.PORT || 5000, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
    console.log(`Server is running at port:-${process.env.PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});