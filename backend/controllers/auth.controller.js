const userBookingModel = require("../models/user.model.js");
const Booking = require("../models/Booking");

// Create new booking
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking successful", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all bookings (admin)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update booking status
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, paymentStatus } = req.body;
    const booking = await Booking.findByIdAndUpdate(id, { status, paymentStatus }, { new: true });
    res.status(200).json({ message: "Booking updated", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


