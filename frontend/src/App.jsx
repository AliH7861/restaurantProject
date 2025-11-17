import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import RegisterRestaurant from "./pages/RegisterRestaurant.jsx";

import CustomerDashboard from "./pages/customer/CustomerDashboard.jsx";
import ManagerDashboard from "./pages/manager/ManagerDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register-restaurant" element={<RegisterRestaurant />} />

        {/* Dashboards */}
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/manager" element={<ManagerDashboard />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
