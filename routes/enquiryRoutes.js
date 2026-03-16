const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

router.post("/", async (req, res) => {
  try {
    const {
      name,
      address,
      phoneNumber,
      pickupLocation,
      noOfPersons,
      selectedPackage,
    } = req.body;

    if (
      !name ||
      !address ||
      !phoneNumber ||
      !pickupLocation ||
      !noOfPersons ||
      !selectedPackage
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEnquiry = new Enquiry({
      name,
      address,
      phoneNumber,
      pickupLocation,
      noOfPersons,
      selectedPackage,
    });

    const savedEnquiry = await newEnquiry.save();

    res.status(201).json({
      message: "Enquiry submitted successfully",
      data: savedEnquiry,
    });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;