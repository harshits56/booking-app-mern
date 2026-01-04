import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  listingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true
  },
  date: String,
  time: String,
  status: {
    type: String,
    default: "confirmed"
  }
});

export default mongoose.model("Booking", bookingSchema);
