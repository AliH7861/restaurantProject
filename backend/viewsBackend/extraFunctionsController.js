import { getPool } from '../models/db.js';
import { getWeatherForLocation } from '../WeatherAPI/weatherService.js';

//Extra Requests
export async function login(req, res) {
    try {
        const {email, password} = req.body; 

        const pool = getPool();

        const [rows] = await pool.query(
            `SELECT customer_id, password_hash FROM Customer WHERE email=?`, 
            [
                email,
            ]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "No account found with this email",
            });
        };

        const user = rows[0];

        const validPassword = await bcrypt.compare(password, user.password_hash);

        if (!validPassword) {
            return res.status(401).json({
                status: "error",
                message: "Incorrect password",
            });
        };

        return res.json({
            status: "success",
            customer_id: user.customer_id,
        });
        
    } catch (err) {
        console.log(err);
            return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
}