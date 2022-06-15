import express, { Router, Request, Response } from 'express';
import taskRouter from '../controllers/task.controller';

const router: Router = express.Router();

export default router
  .get('/task/', taskRouter.onGetAll)
  .post('/task/create', taskRouter.onCreateTask)
  .put('/task/clear', taskRouter.onDeleteTask);
