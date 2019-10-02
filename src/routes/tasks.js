import { Router } from 'express'
const router = Router()

import { createTask, getTasks, getOneTask, deleteTask, updateTask, getTasksByProject } from '../controllers/Tasks.Controller'

// api/tasks

router.post('/', createTask)
router.get('/', getTasks)
router.get('/:id', getOneTask)
router.delete('/:id', deleteTask)
router.put('/:id',updateTask)
router.get('/project/:project_id', getTasksByProject)

export default router