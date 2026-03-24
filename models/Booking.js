const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  pickupLocation: {
    type: String,
    required: true
  },
  dropLocation: {
    type: String,
    required: true
  },
  numberOfPersons: {
    type: Number,
    required: true
  }
}, { timestamps: true });



module.exports = mongoose.model("Booking", bookingSchema);
// module.exports = mongoose.model("BookingPackege", bookingPackege);