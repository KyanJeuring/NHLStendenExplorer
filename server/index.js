const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/faq', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM faq ORDER BY RANDOM() LIMIT 10');
    res.json(result.rows);
  } catch (err) {
    console.error('DB error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/explorer', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM explore_item');
    res.json(result.rows);
  } catch (err) {
    console.error('DB error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/explorer/categories', async (req, res) => {
  try {
    const result = await db.query("SELECT unnest(enum_range(NULL::category_enum)) AS category");
    res.json(result.rows.map(r => r.category));
  } catch (err) {
    console.error('DB error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
