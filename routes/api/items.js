const express = require("express");
const router = express.Router();

// items models
const Item = require("../../models/Items");

// @route get api/items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    employee_name: req.body.employee_name,
    employee_salary: req.body.employee_salary,
    employee_age: req.body.employee_age,
  });
  console.log(newItem);

  newItem.save().then((item) => res.json(item));
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
