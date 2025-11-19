import { getPool } from '../models/db.js';
import bcrypt from "bcrypt";
import { getWeatherForLocation } from '../WeatherAPI/weatherService.js';

export async function p_createReservation(req, res) {
  try {
    const pool = getPool();

    const {
      customer_id,
      customer_name,        // <-- user input
      restaurant_id,
      reservation_date,
      start_time,
      end_time,
      table_id,
      num_people
    } = req.body;

    // 1. Check required fields
    if (!customer_id || !customer_name || !restaurant_id || !reservation_date || !start_time) {
      return res.status(400).json({
        status: "error",
        message: "Missing required fields",
      });
    }

    // 2. Look up customer by ID
    const [customerRows] = await pool.query(
      `SELECT full_name FROM Customer WHERE customer_id = ?`,
      [customer_id]
    );

    // 3. If customer doesn't exist
    if (customerRows.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Customer not found",
      });
    }

    const dbName = customerRows[0].full_name;

    // 4. Compare provided name with DB name
    if (dbName.trim().toLowerCase() !== customer_name.trim().toLowerCase()) {
      return res.status(400).json({
        status: "error",
        message: "Customer ID and customer name do not match",
      });
    }

    // 5. Insert reservation
    const [result] = await pool.query(
      `
      INSERT INTO Reservation 
        (customer_id, restaurant_id, reservation_date, start_time, end_time, table_id, num_people, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        customer_id,
        restaurant_id,
        reservation_date,
        start_time,
        end_time || null,
        table_id || null,
        num_people || 1,
        "Booked"
      ]
    );

    return res.status(201).json({
      status: "success",
      reservation_id: result.insertId
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "error",
      message: "Failed to create reservation"
    });
  }
}

//Create User Working
export async function p_createCustomer(req, res) {
    try {
        const pool = getPool();

        const {
            full_name,
            email,
            phone,
            password,
            confirm_password,
        } = req.body;


        if (!full_name || !email || !phone || !password || !confirm_password) {
            return res.status(400).json({
                status: "error",
                message: "Missing required fields",
            });
        }

        if (password !== confirm_password) {
          return res.status(404).json({
            status: "error",
            message: "Passwords do not match."
          });
        }

        // 1. Check email
        const [emailRows] = await pool.query(
            `
            SELECT customer_id FROM Customer WHERE email = ?
            UNION
            SELECT restaurant_id FROM Restaurant WHERE email = ?
            `,
            [
              email,
              email
            ]
        );

        // 2. Check phone number
        const [phoneRows] = await pool.query(
            "SELECT customer_id FROM Customer WHERE phone = ?",
            [phone]
        );

        if (emailRows.length > 0) {
            return res.status(404).json({
                status: "error",
                message: "Account with this email already exists.",
            });
        };

        if (phoneRows.length > 0) {
            return res.status(404).json({
                status: "error",
                message: "Account with this phone number already exists."
            })
        };


        const password_hash = await bcrypt.hash(password, 10);

        const [result] = await pool.query(
        `
            INSERT INTO Customer 
                (full_name, email, phone, password_hash)
            VALUES (?, ?, ?, ?)
        `,
        [
            full_name,
            email,
            phone,
            password_hash,
        ]
        );

        return res.status(201).json({
        status: "success",
        customer_id: result.insertId
    });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
        status: "error",
        message: "Failed to create user"
        });
    }
}

export async function p_createRestaurant(req, res) {
  try {
    const pool = getPool();

    const {
      name,
      location,
      email,
      phone,
      opening_time,
      closing_time,
      password
    } = req.body;

    console.log(req.body);

    // Check required fields
    if (!name || !location || !email || !opening_time || !closing_time || !password || !phone) {
      return res.status(400).json({
        status: "error",
        message: "Missing required fields",
      });
    }

    const password_hash = await bcrypt.hash(password, 10);

    // Insert new restaurant
    const [result] = await pool.query(
      `
      INSERT INTO Restaurant 
        (name, location, email, opening_time, closing_time, password_hash, phone)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        name,
        location,
        email,
        opening_time,
        closing_time,
        password_hash,
        phone
      ]
    );

    return res.status(201).json({
      status: "success",
      restaurant_id: result.insertId
    });

  } catch (err) {
    console.error("Error creating restaurant:", err);
    return res.status(500).json({
      status: "error",
      message: "Failed to create restaurant"
    });
  }
}

//Login working
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const pool = getPool();

    // 1. Check Customer table
    const [customerRows] = await pool.query(
      `SELECT customer_id, email, password_hash
       FROM Customer
       WHERE email = ?`,
      [email]
    );

    let user = null;
    let accountType = null;
    let passwordHashField = null;
    let idField = null;

    const [adminRows] = await pool.query(
      `SELECT admin_id, email, password_hash
      FROM Administrator
      WHERE email = ?`,
      [email]
    );

      if (adminRows.length > 0) {
        user = adminRows[0];
        accountType = "admin";
        passwordHashField = "password_hash";
        idField = "admin_id";

      } else {
        // 2. Check Restaurant next
        const [restaurantRows] = await pool.query(
          `SELECT restaurant_id, email, password_hash
          FROM Restaurant
          WHERE email = ?`,
          [email]
        );

        if (restaurantRows.length > 0) {
          user = restaurantRows[0];
          accountType = "restaurant";
          passwordHashField = "password_hash"; 
          idField = "restaurant_id";

        } else {
          // 3. Finally check Customer
          const [customerRows] = await pool.query(
            `SELECT customer_id, email, password_hash
            FROM Customer
            WHERE email = ?`,
            [email]
          );

          if (customerRows.length > 0) {
            user = customerRows[0];
            accountType = "customer";
            passwordHashField = "password_hash";
            idField = "customer_id";
          }
        }
    }
    // 3. If not found in any table
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "No account found with this email",
      });
    }

    // 4. Check password
    const validPassword = await bcrypt.compare(password, user[passwordHashField]);

    if (!validPassword) {
      return res.status(401).json({
        status: "error",
        message: "Incorrect password",
      });
    }

    // 5. Set session values
    req.session.email = user.email;
    req.session.account_type = accountType;

    console.log(user.customer_id);
    // 6. Success
    return res.json({
      status: "success",
      type: accountType,
      id: user[idField],
    });
        
    } catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
}