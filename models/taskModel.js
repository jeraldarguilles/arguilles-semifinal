// routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const taskModel = require('../models/taskModel'); // Match the exact filename

const {
  getAlltask,
  getItaskById,
  addtask,
  updatetask,
  deletetask,
} = require("../controllers/taskController");

// Route definitions
router.get("/", getAlltask);
router.get("/:id", getItaskById);
router.post("/", addtask);
router.put("/:id", updatetask);
router.delete("/:id", deletetask);

module.exports = router;
