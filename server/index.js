const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/faq/en', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM faq WHERE language_code = 'en' ORDER BY RANDOM() LIMIT 10");
    res.json(result.rows);
  } catch (err) {
    console.error('DB error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/faq/nl', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM faq WHERE language_code = 'nl' ORDER BY RANDOM() LIMIT 10");
    res.json(result.rows);
  } catch (err) {
    console.error('DB error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/explorer', async (req, res) => {
  try {
    const lang = (req.query.lang || 'en').toLowerCase();
    const result = await db.query(
      `SELECT DISTINCT ei.id,
              COALESCE(eit.title, ei.title) AS title,
              COALESCE(eit.description, ei.description) AS description,
              ei.categories,
              ei.image_url,
              ei.link_url
       FROM explore_item ei
       LEFT JOIN explore_item_translation eit
         ON eit.explore_item_id = ei.id AND eit.language_code = $1
       ORDER BY ei.id`,
      [lang]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'No explore items found' });
    }
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('DB error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/explorer/categories', async (req, res) => {
  try {
    const lang = (req.query.lang || 'en').toLowerCase();
    const result = await db.query(
      `WITH cats AS (
         SELECT unnest(enum_range(NULL::category_enum)) AS key
       )
      SELECT cats.key AS key,
        COALESCE(ct.label, cats.key::text) AS label
       FROM cats
       LEFT JOIN category_translation ct
         ON ct.category = cats.key AND ct.language_code = $1`,
      [lang]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'No categories found' });
    }
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('DB error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/carousel/en', async (req, res) => {
  try {
    const result = await db.query("SELECT DISTINCT ON (id) * FROM carousel_item WHERE language_code = 'en' ORDER BY id, RANDOM() LIMIT 15");
    res.json(result.rows);
  } catch (err) {
    console.error('DB error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/carousel/nl', async (req, res) => {
  try {
    const result = await db.query("SELECT DISTINCT ON (id) * FROM carousel_item WHERE language_code = 'nl' ORDER BY id, RANDOM() LIMIT 15");
    res.json(result.rows);
  } catch (err) {
    console.error('DB error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
