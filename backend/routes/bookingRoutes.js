import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

/* ✅ PASTE THIS HERE */
router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: "Failed to create booking" });
  }
});

export default router;
