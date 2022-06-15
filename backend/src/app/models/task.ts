import { getModelForClass, prop } from '@typegoose/typegoose';

export class TaskSchema {
  @prop({ default: false })
  public _trash!: boolean;

  @prop({ required: true })
  public text!: string;

  @prop({ default: 0, min: 0, max: 3 })
  public priorty!: number;

  @prop({ default: false })
  public isCompleted!: boolean;
}

export const Task = getModelForClass(TaskSchema);

