const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const ItemScema = new Schema({
  employee_name: {
    type: "string",
    required: "true",
  },
  employee_salary: {
    type: "number",
    required: "true",
  },
  employee_age: {
    type: "number",
    required: "true",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Item = mongoose.model("Item", ItemScema);
