const express = require("express");
const mongoose = require("mongoose");

const app = express();
const items = require("./routes/api/items");
const tasks = require("./routes/api/tasks");

app.use(express.json());

// db config

const db = require("./config/keys").mongoURI;

// connect to mongo

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo db connceted"))
  .catch((err) => console.log(err));

app.use("/api/items", items);
app.use("/api/tasks", tasks);

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
