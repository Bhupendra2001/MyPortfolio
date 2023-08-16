const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const route = require("./router");

mongoose
  .connect(process.env.MongoUrl, { useNewUrlParser: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use("/", route);

app.listen(process.env.PORT, () => {
  console.log("mongodb server started in port", process.env.PORT);
});
