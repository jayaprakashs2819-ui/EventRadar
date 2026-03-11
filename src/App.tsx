import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RadarBanner from "./components/RadarBanner";
import Events from "./components/Events";
import EventTicker from "./components/EventTicker";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <RadarBanner />
              <Events />
              <EventTicker />
            </div>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;