import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const password = process.env.DB_ADMIN_PASS;  // CHANGE THIS

bcrypt.hash(password, 10).then(hash => {
  console.log("Hashed password:");
  console.log(hash);
});
