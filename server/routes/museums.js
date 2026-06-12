import express from 'express'
import MuseumsController from '../controllers/museums.js'

const router = express.Router()

router.get('/', MuseumsController.getMuseums)

export default router