import { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { API_BASE_URL } from "../config";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/listings`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.type === "restaurant"
        );
        setRestaurants(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Restaurant Booking
      </h2>

      {restaurants.length === 0 ? (
        <p className="text-gray-600">No restaurants available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <ListingCard
              key={restaurant._id}
              id={restaurant._id}
              name={restaurant.name}
              location={restaurant.location}
              price={restaurant.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Restaurants;
