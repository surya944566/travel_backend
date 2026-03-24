const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// POST booking
router.post("/create", bookingController.createBooking);
router.post("/create-package", bookingController.createBookingPackege);

// GET bookings
router.get("/", bookingController.getBookings);

module.exports = router;