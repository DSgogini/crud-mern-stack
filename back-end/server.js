import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dbConfig from "./src/database/db";

import studentRoute from "./src/routes/student.route";

// Connecting mongoDB Database
mongoose.Promise = global.Promise;

console.log("Mongoose connecting to:", dbConfig.db);

mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected!");
    },
    (error) => {
      console.log("Could not connect to database : " + error);
    }
  );

// Init Express
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Enable CORS Policy.
app.use(cors());

// Register Routes...
app.use("/students", studentRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
