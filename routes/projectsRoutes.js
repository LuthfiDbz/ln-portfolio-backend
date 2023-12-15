import express from 'express'
import { addProject, getAllProjects } from '../controllers/projectsControllers.js'
// import { addPlant, getAllPlants, getPlantById, updatePlant } from '../controllers/plantsControllers.js';
const router = express.Router()


router.get('/', getAllProjects)
// router.get('/:id', getPlantById)
router.post('/', addProject)
// router.put('/:id', updatePlant)

export default router