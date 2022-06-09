import express from 'express';
import cors from 'cors';
import router from './routes';

class App {
  server: express.Application;
    
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.json())
  }

  routes() {
    this.server.use('/', router);
  }
}

export default new App().server;
