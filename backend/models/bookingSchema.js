const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      default: "",
    },

    service: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: true,
    },

    fabric: {
      type: String,
      required: true,
    },

    bookingDate: {
      type: Date,
      required: true,
    },

    deliveryDate: {
      type: Date,
      required: true,
    },

    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true, // createdAt aur updatedAt automatically banenge
  }
);

module.exports = mongoose.model("Booking", bookingSchema);