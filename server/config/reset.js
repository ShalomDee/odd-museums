import { pool } from './database.js'
import './dotenv.js'
import museums from '../../data.js';

const createDataTable = async () => {

    const createTableQuery = `
        DROP TABLE IF EXISTS odd_museums;

        CREATE TABLE IF NOT EXISTS odd_museums (
            id SERIAL PRIMARY KEY,
            slug VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            curiosityLevel VARCHAR(255) NOT NULL,
            mustSee VARCHAR(255) NOT NULL,
            summary TEXT NOT NULL,
            imageUrl VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 odd_museums table created successfully')
    } catch (err) {
        console.error('⚠️ error creating odd_museums table', err)
    }
};

const seedDataTable = async () => {
  await createDataTable()
  museums.forEach((museum) => {
    const insertQuery = {
      text: 'INSERT INTO odd_museums (slug, name, location, curiosityLevel, mustSee, summary, imageUrl) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    }
    const values = [
      museum.slug,
      museum.name,
      museum.location,
      museum.curiosityLevel,
      museum.mustSee,
      museum.summary,
      museum.imageUrl
    ]
    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting museum', err)
        return
      }
      console.log(`✅ ${museum.name} added successfully`)
    })
  })
};
seedDataTable();
