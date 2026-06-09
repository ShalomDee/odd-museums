const express = require('express');
const path = require('path');
const museums = require('./data');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// API: all museums
app.get('/api/museums', (req, res) => {
  res.json(museums);
});

// API: single museum
app.get('/api/museums/:slug', (req, res) => {
  const museum = museums.find(m => m.slug === req.params.slug);
  if (!museum) return res.status(404).json({ error: 'Not found' });
  res.json(museum);
});

// Detail page
app.get('/museums/:slug', (req, res) => {
  const museum = museums.find(m => m.slug === req.params.slug);
  if (!museum) return res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  res.sendFile(path.join(__dirname, 'views', 'detail.html'));
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Odd Museums running at http://localhost:${PORT}`);
});