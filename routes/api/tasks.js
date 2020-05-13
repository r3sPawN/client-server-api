const express = require("express");
const router = express.Router();

// task models
const Task = require("../../models/tasts");

// @route get api/items
router.get("/", (req, res) => {
  Task.find()
    .sort({ date: -1 })
    .then((tasks) => res.json(tasks));
});

router.post("/", (req, res) => {
  const newTask = new Task({
    name: req.body.name,
    employee_editable: req.body.editable,
  });
  console.log(newTask);

  newTask.save().then((task) => res.json(task));
});

router.delete("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then((task) => task.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
