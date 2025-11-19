import { useParams } from "react-router-dom";
import OrderNavbar from "./OrderNavbar";
import OrderCustomer from "./OrderCustomer";
import OrderOrder from "./OrderOrder";

export default function RestaurantReservationPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0a0a0a] to-[#000]">

      <div className="px-8 py-10 max-w-5xl mx-auto">

        {/* Page Header */}
        <h1 className="text-4xl font-semibold mb-4">
          Reservations for Restaurant {id}
        </h1>

        <p className="text-gray-400 mb-6">
          View reservation details, customer information, and place your booking.
        </p>

        {/* Reservation Header */}
        <OrderNavbar />

        {/* Reservation Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <OrderCustomer />
          <OrderOrder />
        </div>
      </div>

    </div>
  );
}
