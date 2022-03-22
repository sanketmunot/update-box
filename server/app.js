var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require('mongoose')
require('dotenv').config()

var updateRouter = require("./routes/updateRouter");
var usersRouter = require("./routes/users");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// var corsOptions = {
//     origin: '*',
//   }

app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));

const DBURI = process.env.MONGO_DB_URI;
mongoose
  .connect(DBURI)
  .then((result) => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

app.use("/updates", updateRouter);
app.use("/users", usersRouter);

module.exports = app;
