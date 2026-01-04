import { Link } from "react-router-dom";

function ListingCard({ id, name, location, price }) {
  return (
    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{location}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="font-semibold text-gray-800">₹{price}</span>

        <Link to={`/booking/${id}`}>
          <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Book
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ListingCard;
