import { getModelForClass, prop } from '@typegoose/typegoose';
import { TaskSchema } from './task'; 

export class ListSchema {
  @prop({ ref: () => TaskSchema })
  public _tasks?: TaskSchema[];

  @prop({ required: true })
  public title!: string;
}

export const List = getModelForClass(ListSchema);
