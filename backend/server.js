const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "127.0.0.1", // safer than "localhost" on some setups
  user: "root",
  password: "",
  database: "liu",
  port: 3306, // change to 3307 if your XAMPP MySQL uses 3307
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
  connection.release();
});

app.post("/Signup", (req, res) => {
  const { email, password, fname } = req.body;

  if (!email || !password || !fname) {
    return res.status(400).json({ error: "email, password, fname are required" });
  }

  const sql = "INSERT INTO users (email, password, fname) VALUES (?, ?, ?)";
  db.query(sql, [email, password, fname], (err, result) => {
    if (err) {
      console.error("Error signing up:", err);

      if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).json({ error: "Email already exists" });
      }

      return res.status(500).json({ error: "Failed to signup" });
    }

    res.json({
      message: "Signup successful",
      userId: result.insertId,
    });
  });
});

app.post("/Login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }

  const sql = "SELECT id, email, password, fname FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, rows) => {
    if (err) {
      console.error("Error logging in:", err);
      return res.status(500).json({ error: "Failed to login" });
    }

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = rows[0];
    res.json({
      message: "Login successful",
      user: { id: user.id, email: user.email, fname: user.fname },
    });
  });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});