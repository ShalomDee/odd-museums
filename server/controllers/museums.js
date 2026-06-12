import { pool } from '../config/database.js'

const getMuseums = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM museums ORDER BY id ASC')
        res.status(200).json(results.row)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

export default {
    getMuseums
}
