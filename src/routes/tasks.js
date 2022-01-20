import { Router } from 'express';
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from '../controllers/tasks'

//nos permite definir urls (gets, posts)
const router = Router();

//nos va permitir obtener todas las tareas
/**
 * @swagger
 * Tags:
 *  name: Tasks
 *  desription: Task endpoint
 */
/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all tasks
 *    tags: [Tasks]
 */
router.get('/tasks', getTasks)

//Nos permite contar cuantas tareas hay en total
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: count tasks
 *    tags: [Tasks]
 */
router.get('/tasks/count', getTaskCount)

//Nos permite obtener una unica tarea mediante un id
/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: get a task by id
 *    tags: [Tasks]
 */
router.get('/tasks/:id', getTask)

//Nos permite crear una tarea
/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: save a new task
 *    tags: [Tasks]
 */
router.post('/tasks', saveTask)

//Nos permite borrar una tarea
/**
 * @swagger
 * /tasks:
 *  delete:
 *    summary: delete a task by id
 *    tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask)

//Nos permite actualizar una tarea
/**
 * @swagger
 * /tasks:
 *  put:
 *    summary: update task
 *    tags: [Tasks]
 */
router.put('/tasks/:id', updateTask)

export default router;