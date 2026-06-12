import express from 'express'
import './config/dotenv.js'
import path from 'path'
import { fileURLToPath } from 'url'
// import museums from '../data.js'
import museumsRouter from './routes/museums.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))

// Museums API routes
app.use('/api/museums', museumsRouter)

// Detail page
app.get('/museums/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'detail.html'))
})

// Catch-all 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Odd Museums running at http://localhost:${PORT}`);
});