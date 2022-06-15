export interface Task {
  _id: string;
  _trash: boolean;
  text: string;
  priorty: number;
  isCompleted: boolean;
}

export interface TaskState {
  activeTasks: Task[];
  trashTasks: Task[];
  loading: boolean;
  error: null | string;
}

export enum TaskActionTypes {
  SET_TASK_DATA = 'SET_TASK_DATA',
  SET_TASK_LOADING = 'SET_TASK_LOADING'
}

export interface SetTaskDataAction {
  type: TaskActionTypes.SET_TASK_DATA;
  payload: Task[];
}

export interface SetTaskLoadingAction {
  type: TaskActionTypes.SET_TASK_LOADING;
  payload: boolean;
}

export type TaskAction = SetTaskDataAction | SetTaskLoadingAction
