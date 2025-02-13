import express from 'express';
import pool from "./db.mjs"; // PostgreSQL connection

const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static('./'));

// API to get data from PostgreSQL
app.get('/data', async (req, res) => {
  //res.sendFile('/home/kali/dash/backend/index.html')
  //res.send('<h1>kkyshimla</h1>')
  try {
    const result = await pool.query('SELECT * FROM users'); // Ensure "users" table exists
    res.json(result.rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: err.message });
  }
});
// app.get('/data', async (req, res) => {
//   res.json([{ id: 1, name: "Test User", email: "test@example.com" }]);
// });



// Start server with a defined port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
