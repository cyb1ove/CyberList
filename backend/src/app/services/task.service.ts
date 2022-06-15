import { Task, TaskSchema } from '../models/task';

type newTasks = {
  [key in keyof TaskSchema]?: TaskSchema[key];
} & {
  _id: string;
}[];
class TaskSerivce {
  async updateTasks(newTasks: newTasks, populate = "") {
    const oldRows = await Task.find({ _id: newTasks.map(({ _id }) => _id) }).lean();
    const updateTasks = newTasks.map(row => {
        const rowId = new String(row._id);
        return Task.findByIdAndUpdate(rowId, row, { new: true }).populate(populate).lean();
    });

    return updateTasks;
  }
}
