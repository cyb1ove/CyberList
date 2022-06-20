import rootReducer from '../store/reducers';
import { MODES } from '../consts';

export type Mode = typeof MODES[number];

export interface Task {
  _id: string;
  _trash: boolean;
  text: string;
  priorty: number;
  isCompleted: boolean;
}

export interface TaskState {
  mode: Mode;
  tasks: Array<Task | 'loading'>;
  loading: boolean;
  error: null | string;
}

export enum TaskActionTypes {
  SET_TASK_DATA = 'SET_TASK_DATA',
  SET_TASK_LOADING = 'SET_TASK_LOADING',
  SET_TASK_MODE = 'SET_TASK_MODE',
}

export interface SetTaskDataAction {
  type: TaskActionTypes.SET_TASK_DATA;
  payload: Array<Task | 'loading'>;
}

export interface SetTaskLoadingAction {
  type: TaskActionTypes.SET_TASK_LOADING;
  payload: boolean;
}

export interface SetTaskMode {
  type: TaskActionTypes.SET_TASK_MODE;
  payload: Mode;
}

export type TaskAction = SetTaskDataAction | SetTaskLoadingAction | SetTaskMode;

export type RootState = ReturnType<typeof rootReducer>;
