import express from "express";
import cors from "cors";
import pool from "./db.mjs";

const app = express();
app.use(cors()); // Enable CORS

// Serve frontend files (optional, if you want to serve React from Express)
app.use(express.static("/home/kali/dash/frontend/react/my-app/public"));

// API route to fetch users
app.get("/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
