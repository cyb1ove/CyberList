import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

export default router
  .get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
  })
