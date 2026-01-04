import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["restaurant", "spa", "event"],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: String,
  price: Number
});

export default mongoose.model("Listing", listingSchema);
