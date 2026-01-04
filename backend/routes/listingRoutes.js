import express from "express";
import Listing from "../models/Listing.js";

const router = express.Router();

/**
 * GET /api/listings
 * Fetch all listings
 */
router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch listings" });
  }
});

/**
 * POST /api/listings
 * Create a listing (temporary, for testing)
 */
router.post("/", async (req, res) => {
  try {
    const listing = new Listing(req.body);
    const savedListing = await listing.save();
    res.status(201).json(savedListing);
  } catch (error) {
    res.status(400).json({ message: "Failed to create listing" });
  }
});

export default router;
