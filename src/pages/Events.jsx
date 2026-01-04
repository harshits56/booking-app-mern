import { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { API_BASE_URL } from "../config";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/listings`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.type === "event"
        );
        setEvents(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Event Booking
      </h2>

      {events.length === 0 ? (
        <p className="text-gray-600">No events available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <ListingCard
              key={event._id}
              id={event._id}
              name={event.name}
              location={event.location}
              price={event.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
