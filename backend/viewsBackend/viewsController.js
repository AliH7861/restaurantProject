import { getPool } from '../models/db.js';
import { getWeatherForLocation } from '../WeatherAPI/weatherService.js';

//Common View 1
export async function views_all_reservations(req, res) {
  try {
    const pool = getPool();

    const {
        search = "",    // stores search for cust name or rest name
        date,           // uses reservation_date to filter by date
    } = req.query;

    // Base SQL Query, added sql depends on search & date
    let sql = `
        SELECT * FROM views_all_reservations
        WHERE 1 = 1  
    ` // WHere 1 = 1 is only to so that we can always use AND to add sql

    // to hold the inputs into added sql
    const inputParams = [];

    // Queries for customer name or restaurant name
    if (search) {
        sql += `
            AND (
                customer_name LIKE ?
                OR restaurant_name LIKE ?
            )
        `;

        // sues pattern so that it matches more stuff
        const pattern = `%${search}%`;

        // ex. if search is coffee, itll search coffee in customer name and restaurant name
        inputParams.push(pattern, pattern);
    }

    // filter by date
    if (date) {
        sql += `
            AND (
                r.reservation_date = ?
            )
        `;

        inputParams.push(date);
    }

    // injects inputParams into the sql query we made above
    const [rows] = await pool.query(sql, inputParams);

    // return response as json object
    return res.json(rows);
  }
  catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

//Common view 2
export async function getMaxReservations(req, res) {
    try {
        const pool = getPool();

        const [rows] = await pool.query(
            `
            SELECT * FROM view_req_any_all_groupby;
            `
        );

        return res.json(rows);
    } 
    catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

//Common view 3
export async function getGreaterThanAverageReservations(req, res) {
    try {
        const pool = getPool();

        const [rows] = await pool.query(
            `
            SELECT * FROM view_req_correlated_subquery ;
            `
        );

        return res.json(rows);
    } 
    catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

//Common View 4
export async function numOfReservationsByRestaurant(req, res) {
    try {
        const pool = getPool();

        const [rows] = await pool.query(
            `
            SELECT * FROM view_req_full_join;
            `
        );

        return res.json(rows);
    } 
    catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

//Common View 5
export async function viewAllEmails(req, res) {
    try {
        const pool = getPool();

        const [rows] = await pool.query(
            `
            SELECT * FROM view_all_contact_emails;
            `
        );

        return res.json(rows);
    } 
    catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};


//Custom Views

//Custom View 1
export async function averageReservation(req, res) {
    try {
        const pool = getPool();

        const [rows] = await pool.query(
            `
            SELECT * FROM view_avg_party_size;
            `
        );
        return res.json(rows);
    }
    catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

//Custom View 2
export async function reservationsByDay(req, res) {
    try {
        const pool = getPool();

        const [rows] = await pool.query(
            `
            SELECT * FROM view_reservations_per_day;
            `
        );
        return res.json(rows);
    }
    catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

//Custom View 3
export async function frequentCustomers(req, res) {
    try {
        const pool = getPool();

        const [rows] = await pool.query(
            `
            SELECT * FROM view_frequent_customers;
            `
        );
        return res.json(rows);
    }
    catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

//Custom View 4
export async function availableTables(req, res) {
    try {
        const pool = getPool();

        const [rows] = await pool.query(
            `
            SELECT * FROM view_available_tables_summary;
            `
        );
        return res.json(rows);
    }
    catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

//Custom View 5
export async function openLate(req, res) {
    try {
        const pool = getPool();

        const [rows] = await pool.query(
            `
            SELECT * FROM view_late_restaurants;
            `
        );
        return res.json(rows);
    }
    catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

