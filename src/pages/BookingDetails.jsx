import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

function BookingDetails() {
  const { id } = useParams();

  const [listing, setListing] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/listings`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item._id === id);
        setListing(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!listing) {
    return <p className="text-center mt-10">Loading listing...</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white border rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">
        {listing.name}
      </h2>

      <p className="text-gray-600 mb-1">
        Location: {listing.location}
      </p>

      <p className="font-semibold mb-4">
        Price: ₹{listing.price}
      </p>

      <label className="block text-sm font-medium mb-1">
        Select Date
      </label>
      <input
        type="date"
        className="w-full border rounded px-3 py-2 mb-4"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label className="block text-sm font-medium mb-1">
        Select Time
      </label>
      <select
        className="w-full border rounded px-3 py-2 mb-4"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Choose time</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="1:00 PM">1:00 PM</option>
        <option value="6:00 PM">6:00 PM</option>
        <option value="9:00 PM">9:00 PM</option>
      </select>

      <button
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        onClick={() => {
          if (!date || !time) {
            alert("Select date and time");
            return;
          }

          fetch(`${API_BASE_URL}/api/bookings`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              listingId: listing._id,
              date,
              time,
            }),
          })
            .then((res) => res.json())
            .then(() => setConfirmed(true))
            .catch(() => alert("Booking failed"));
        }}
      >
        Confirm Booking
      </button>

      {confirmed && (
        <p className="mt-4 text-green-600 font-medium text-center">
          Booking confirmed ✔
        </p>
      )}
    </div>
  );
}

export default BookingDetails;
