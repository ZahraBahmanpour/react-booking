import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightDetails from "../pages/flights/FlightDetails";
import Flights from "../pages/flights/Flights";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import StayDetails from "../pages/stays/StayDetails";
import Stays from "../pages/stays/Stays";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="stays" element={<Stays />} />
          <Route path="flights" element={<Flights />} />
        </Route>
        <Route path="stays/:stayId" element={<StayDetails />} />
        <Route path="flights/:flightId" element={<FlightDetails />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
