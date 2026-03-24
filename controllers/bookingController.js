const Booking = require("../models/Booking");
const BookingPackege = require("../models/BookingPackege");
// CREATE BOOKING
exports.createBooking = async (req, res) => {
  try {
    const { name, address, pickupLocation, dropLocation, numberOfPersons } = req.body;

    const newBooking = new Booking({
      name,
      address,
      pickupLocation,
      dropLocation,
      numberOfPersons
    });

    await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking Created Successfully",
      data: newBooking
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating booking",
      error: error.message
    });
  }
};


// GET ALL BOOKINGS (optional)
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: bookings
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching bookings"
    });
  }
};

exports.createBookingPackege = async (req, res) => {
  try {
    const {
      name,
      phone,
      address,
      pickupLocation,
      numberOfPersons,
      vehicle,
      totalAmount,
      tripDetails
    } = req.body;

    const booking = new BookingPackege({   // ✅ CORRECT MODEL
      name,
      phone,
      address,
      pickupLocation,
      numberOfPersons,
      vehicle,
      totalAmount,
      tripDetails
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: "Package Booking Successful",
      data: booking
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Booking Failed",
      error: error.message
    });
  }
};