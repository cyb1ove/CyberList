import {
  Task,
  Mode,
  TaskActionTypes,
  SetTaskDataAction,
  SetTaskLoadingAction,
  SetTaskMode,
} from '../../types/task';

export const setData: (data: Array<Task | 'loading'>) => SetTaskDataAction = (data) => ({
  type: TaskActionTypes.SET_TASK_DATA,
  payload: data,
});

export const setLoading: (data: boolean) => SetTaskLoadingAction = (data) => ({
  type: TaskActionTypes.SET_TASK_LOADING,
  payload: data,
});

export const setMode: (data: Mode) => SetTaskMode = (data) => ({
  type: TaskActionTypes.SET_TASK_MODE,
  payload: data,
});
