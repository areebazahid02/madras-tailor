const Booking = require("../models/bookingSchema");

// Create Booking
const createBooking = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      service,
      size,
      fabric,
      bookingDate,
      deliveryDate,
      notes,
    } = req.body;

    const booking = new Booking({
      firstName,
      lastName,
      phone,
      email,
      service,
      size,
      fabric,
      bookingDate,
      deliveryDate,
      notes,
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: "Booking Submitted Successfully!",
      booking,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createBooking,
};