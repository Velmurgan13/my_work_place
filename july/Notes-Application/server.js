require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;

mongoose.connect(
  process.env.DBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Application is Connected to MongoDB");
  }
);

app.listen(PORT, () => {
  console.log("This port is running in PORT 3000");
});
