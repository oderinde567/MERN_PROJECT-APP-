const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

// Get all requests
router.get("/", async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new request
router.post("/", async (req, res) => {
  const { category, description } = req.body;
  const request = new Request({ category, description, userId: "someUserId" }); // Replace with logged-in user ID
  try {
    const newRequest = await request.save();
    res.status(201).json({ message: "Request created", request: newRequest });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
