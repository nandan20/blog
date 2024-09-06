const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({
  user: 'postgres',
  host: 'db-service', // The name of the PostgreSQL service in Kubernetes
  database: 'blogdb',
  password: 'password',
  port: 5432,
});

// Initialize the database with a table and sample data
pool.query(`
  CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content TEXT
  );
  INSERT INTO posts (title, content) VALUES ('First Post', 'This is your first blog post.') ON CONFLICT DO NOTHING;
`, (err) => {
  if (err) {
    console.error('Error initializing database:', err);
  } else {
    console.log('Database initialized.');
  }
});

// Route to get all posts
app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API Service running on port ${PORT}`));

