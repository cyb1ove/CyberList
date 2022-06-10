import { getModelForClass, prop } from '@typegoose/typegoose';

class TaskSchema {
  @prop()
  public text!: string;

  @prop()
  public isCompleted!: boolean;
}

const TaskModel = getModelForClass(TaskSchema);

export default TaskModel;
