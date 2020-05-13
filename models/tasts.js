const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const TasksSchemas = new Schema({
  name: {
    type: "string",
    required: "true",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Task = mongoose.model("Task", TasksSchemas);
