import pg from 'pg';
const { Pool }=pg;
const pool = new Pool({
  user: process.env.PG_USER || "postgres",
  host: process.env.PG_HOST || "localhost",
  database: process.env.PG_DATABASE || "mydb",
  password: process.env.PG_PASSWORD || "dell",
  port: process.env.PG_PORT || 5432,
});

export default pool;
