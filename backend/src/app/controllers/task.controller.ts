import { Request, Response } from 'express';
import { Task } from '../models/task';

export default {
  onCreateTask: async (request: Request, response: Response): Promise<Response> => {
    try {
      const taskData = request.body;
      const task = new Task(taskData);

      await task.save();

      const tasks = await Task.find().exec();

      return response.status(200).send(tasks);
    } catch (error) {
      return response.status(400).send(error);
    }
  },
  onGetAll: async (request: Request, response: Response): Promise<Response> => {
    try {
      const tasks = await Task.find().exec();

      return response.status(200).send(tasks);
    } catch (error) {
      return response.status(400).send(error);
    }
  },
  onDeleteTask: async (request: Request, response: Response): Promise<Response> => {
    try {
      const { _id } = request.body;

      const a = Task.findByIdAndUpdate(_id, { _trash: true }, { new: true }).exec();
      const tasks = await Task.find().exec();

      return response.status(200).send(tasks);
    } catch (error) {
      return response.status(400).send(error);
    }
  }
}
