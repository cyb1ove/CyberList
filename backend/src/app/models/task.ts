import { getModelForClass, prop } from '@typegoose/typegoose';

class TaskSchema {
  @prop({ default: false })
  public _trash!: boolean;

  @prop({ required: true })
  public text!: string;

  @prop({ default: 0, min: 0, max: 3 })
  public priorty!: number;

  @prop({ default: false })
  public isCompleted!: boolean;
}

const TaskModel = getModelForClass(TaskSchema);

export default TaskModel;
