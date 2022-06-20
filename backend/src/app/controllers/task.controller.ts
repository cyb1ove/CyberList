import { Request, Response } from 'express';
import { Task } from '../models/task';

export default {
  onCreateTask: async (request: Request, response: Response): Promise<Response> => {
    try {
      const taskData = request.body;
      const task = new Task(taskData);

      await task.save();

      return response.status(200).send(task);
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
      const id = request.params.id

      const updatedTask = await Task.deleteOne({ id });

      return response.status(200).send(updatedTask);
    } catch (error) {
      return response.status(400).send(error);
    }
  },
  onDeleteAllTasks: async (request: Request, response: Response): Promise<Response> => {
    try {
      debugger;
      const result = await Task.remove({});

      return response.status(200).send(result);
    } catch(error) {
      return response.status(400).send(error);
    }
  },
  onCompleteTask: async (request: Request, response: Response): Promise<Response> => {
    try {
      const { _id } = request.body;

      const updatedTask = await Task.findByIdAndUpdate(_id, { isCompleted: true }, { new: true }).exec();

      return response.status(200).send(updatedTask);
    } catch (error) {
      return response.status(400).send(error);
    }
  },
  onRevertTask: async (request: Request, response: Response): Promise<Response> => {
    try {
      const { _id } = request.body;

      const updatedTask = await Task.findByIdAndUpdate(_id, {
        isCompleted: false,
        _trash: false,
      }, { new: true }).exec();

      return response.status(200).send(updatedTask);
    } catch (error) {
      return response.status(400).send(error);
    }
  },
  onChangeTask: async (request: Request, response: Response): Promise<Response> => {
    try {
      const { _id, value } = request.body;

      const updatedTask = await Task.findByIdAndUpdate(_id, { text: value }, { new: true }).exec();

      return response.status(200).send(updatedTask);
    } catch (error) {
      return response.status(400).send(error);
    }
  },
}
