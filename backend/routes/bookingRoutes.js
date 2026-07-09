const express = require("express");
const router = express.Router();

const { createBooking } = require("../controllers/bookingController.js");

// POST Booking
router.post("/", createBooking);

module.exports = router;