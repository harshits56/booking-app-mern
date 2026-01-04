import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Events from "./pages/Events";
import BookingDetails from "./pages/BookingDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/events" element={<Events />} />
          <Route path="/booking/:id" element={<BookingDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
