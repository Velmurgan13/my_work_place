const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const verify = require('./routes/verifyToken')

dotenv.config();

//connect to db
mongoose.connect(
  process.env.DBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("connected to Database")
);

//Middlewares

app.use(express.json());

//Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//Routes Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts",verify,  postRoute);

app.listen(5000, () => console.log("server up and running"));
