import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">BookingApp</h1>

        <div className="flex gap-6 text-gray-700">
          <Link className="hover:text-blue-600" to="/">Home</Link>
          <Link className="hover:text-blue-600" to="/restaurants">Restaurants</Link>
          <Link className="hover:text-blue-600" to="/events">Events</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
