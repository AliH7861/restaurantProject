import { useState } from "react";
import { useEffect } from "react";

export function AllReservations() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // call your Node backend
    fetch("http://localhost:3000/views/all-reservations")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reservations");
        return res.json();
      })
      .then((data) => {
        setReservations(data);
        setLoading(false);
        //console.log(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load reservations");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Reservations Dashboard</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>Reservation Date</th>
              <th>Start Time</th>
              <th>Customer Name</th>
              <th>Restaurant Name</th>
              <th>Table #</th>
              {/* add more cols as needed */}
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r.reservation_id}>
                <td>{r.reservation_id}</td>
                <td>{r.reservation_date}</td>
                <td>{r.start_time}</td>
                <td>{r.customer_name}</td>
                <td>{r.restaurant_name}</td>
                <td>{r.table_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export function OverAverage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // call your Node backend
    fetch("http://localhost:3000/views/over-average")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reservations");
        return res.json();
      })
      .then((data) => {
        setRows(data);
        setLoading(false);
        //console.log(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load reservations");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Reservations Dashboard</h2>
      {rows.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>Customer ID</th>
              <th>Restaurant ID</th>
              <th>Reservation Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Table ID</th>
              <th># of People</th>
              <th>Status</th>
              {/* add more cols as needed */}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.reservation_id}>
                <td>{r.reservation_id}</td>
                <td>{r.customer_id}</td>
                <td>{r.restaurant_id}</td>
                <td>{r.reservation_date}</td>
                <td>{r.start_time}</td>
                <td>{r.end_time}</td>
                <td>{r.table_id}</td>
                <td>{r.num_people}</td>
                <td>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export function MaxReservations() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // call your Node backend
    fetch("http://localhost:3000/views/max-reservations")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reservations");
        return res.json();
      })
      .then((data) => {
        setRows(data);
        setLoading(false);
        //console.log(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load reservations");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Reservations Dashboard</h2>
      {rows.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>Restaurant ID</th>
              <th>Restaurant Name</th>
              <th>Total Reservations</th>
              {/* add more cols as needed */}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, index) => (
              <tr key={index}>
                <td>{r.restaurant_id}</td>
                <td>{r.restaurant_name}</td>
                <td>{r.total_reservations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export function AveragePartySize() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/views/average-reservation") // match your route
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch average party size");
        return res.json();
      })
      .then((data) => {
        setRows(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load average party size");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Average Party Size by Restaurant</h2>
      {rows.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>Restaurant ID</th>
              <th>Restaurant Name</th>
              <th>Average Party Size</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, index) => (
              <tr key={index}>
                <td>{r.restaurant_id}</td>
                <td>{r.restaurant_name}</td> {/* alias name AS restaurant_name */}
                <td>{r.avg_party_size}</td>   {/* alias AVG(...) AS avg_party_size */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export function ReservationsPerDay() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/views/reservations-by-day")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reservations per day");
        return res.json();
      })
      .then((data) => {
        setRows(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load reservations per day");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Reservations per Day</h2>
      {rows.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Reservations</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, index) => (
              <tr key={index}>
                <td>{r.reservation_date}</td>     {/* alias as reservation_date */}
                <td>{r.total_reservations}</td>   {/* alias COUNT(*) AS total_reservations */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export function FrequentCustomers() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/views/frequent-customers")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch frequent customers");
        return res.json();
      })
      .then((data) => {
        setRows(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load frequent customers");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Frequent Customers</h2>
      {rows.length === 0 ? (
        <p>No frequent customers found.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Total Reservations</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, index) => (
              <tr key={index}>
                <td>{r.customer_id}</td>
                <td>{r.full_name}</td>          {/* from Customer.full_name */}
                <td>{r.email}</td>              {/* from Customer.email */}
                <td>{r.total_reservations}</td> {/* alias COUNT(*) AS total_reservations */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export function AvailableTablesSummary() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/views/available-tables")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch table availability");
        return res.json();
      })
      .then((data) => {
        setRows(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load table availability");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Available Tables Summary</h2>
      {rows.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>Restaurant ID</th>
              <th>Restaurant Name</th>
              <th>Total Tables</th>
              <th>Available Tables</th>
              <th>Total Capacity</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, index) => (
              <tr key={index}>
                <td>{r.restaurant_id}</td>
                <td>{r.restaurant_name}</td>  {/* alias name AS restaurant_name */}
                <td>{r.total_tables}</td>      {/* e.g. COUNT(*) */}
                <td>{r.available_tables}</td>  {/* your logic */}
                <td>{r.total_capacity}</td>    {/* e.g. SUM(capacity) */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export function LateRestaurants() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/views/open-late")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch late restaurants");
        return res.json();
      })
      .then((data) => {
        setRows(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load late restaurants");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Late Night Restaurants</h2>
      {rows.length === 0 ? (
        <p>No late-night restaurants found.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>Restaurant ID</th>
              <th>Restaurant Name</th>
              <th>Location</th>
              <th>Closing Time</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, index) => (
              <tr key={index}>
                <td>{r.restaurant_id}</td>
                <td>{r.restaurant_name}</td>  {/* alias name AS restaurant_name */}
                <td>{r.location}</td>
                <td>{r.closing_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

//Check this
export function FullReservationDetails() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/views/res-by-restaurant") // or whatever route calls numOfReservationsByRestaurant
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reservation details");
        return res.json();
      })
      .then((data) => {
        setRows(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load reservation details");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Reservation Details (Full Join)</h2>
      {rows.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>Reservation ID</th>
              <th>Date</th>
              <th>Start</th>
              <th>End</th>
              <th>Status</th>
              <th># People</th>
              <th>Table #</th>
              <th>Restaurant</th>
              <th>Customer</th>
              <th>Customer Email</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, index) => (
              <tr key={index}>
                <td>{r.reservation_id}</td>
                <td>{r.reservation_date}</td>
                <td>{r.start_time}</td>
                <td>{r.end_time}</td>
                <td>{r.status}</td>
                <td>{r.num_people}</td>
                <td>{r.table_number}</td>       {/* alias from Table_Info */}
                <td>{r.restaurant_name}</td>    {/* alias Restaurant.name */}
                <td>{r.customer_name}</td>      {/* alias Customer.full_name AS customer_name */}
                <td>{r.customer_email}</td>     {/* alias Customer.email AS customer_email */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export function AllContactEmails() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/views/all-emails")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contact emails");
        return res.json();
      })
      .then((data) => {
        setRows(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load contact emails");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>All Contact Emails</h2>
      {rows.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>Contact Type</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, index) => (
              <tr key={index}>
                <td>{r.contact_type}</td>  {/* e.g. 'Customer', 'Restaurant', 'Admin' */}
                <td>{r.full_name}</td>     {/* or restaurant_name depending on your view */}
                <td>{r.email}</td>
                <td>{r.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
