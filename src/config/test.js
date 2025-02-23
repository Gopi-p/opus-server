const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

(async () => {
  const client = await pool.connect();
  try {
    await client.query(
      "CREATE TABLE IF NOT EXISTS test (id SERIAL PRIMARY KEY, name TEXT)"
    );
  } catch (err) {
    console.error(err);
  } finally {
    client.release();
  }
})();
