import express from 'express'
import '../server/config/dotenv.js'
import path from 'path'
import { fileURLToPath } from 'url'
import museums from '../data.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

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
  if (!museum) return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.sendFile(path.join(__dirname, 'views', 'detail.html'));
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Odd Museums running at http://localhost:${PORT}`);
});