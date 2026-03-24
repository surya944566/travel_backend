const mongoose = require("mongoose");

const bookingPackegeSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  pickupLocation: String,
  numberOfPersons: Number,
  vehicle: String,
  totalAmount: Number,
  tripDetails: Object
}, { timestamps: true });

module.exports = mongoose.model("BookingPackege", bookingPackegeSchema);