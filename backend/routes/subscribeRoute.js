const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");
const allowCors = require("../middleware/cors");

// @route POST /api/subscribe
// @desc Handle newsletter subscription
// @access Public
router.post("/subscribe", allowCors(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Check if the email is already subscribed
    let subscriber = await Subscriber.findOne({ email });

    if (subscriber) {
      return res.status(400).json({ message: "email is already subscribed" });
    }

    //  Create a new subscribers
    subscriber = new Subscriber({ email });
    await subscriber.save();

    res
      .status(201)
      .json({ message: "Successfully subscribed to the newsletter!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}));

module.exports = router;
