import express, { Router, Request, Response } from 'express';
import taskRouter from '../controllers/task.controller';

const router: Router = express.Router();

export default router
  .get('/task/', taskRouter.onGetAll)
  .post('/task/create', taskRouter.onCreateTask)
  .delete('/task/', taskRouter.onDeleteAllTasks)
  .delete('/task/:id', taskRouter.onDeleteTask)
  .put('/task/complete', taskRouter.onCompleteTask)
  .put('/task/revert', taskRouter.onRevertTask)
  .put('/task/edit', taskRouter.onChangeTask);
