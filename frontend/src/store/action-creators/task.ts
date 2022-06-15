import {
  Task,
  TaskActionTypes,
  SetTaskDataAction,
  SetTaskLoadingAction,
} from '../../types/task';

export const setData: (data: Task[]) => SetTaskDataAction = (data) => ({
  type: TaskActionTypes.SET_TASK_DATA,
  payload: data,
});

export const setLoading: (data: boolean) => SetTaskLoadingAction = (data) => ({
  type: TaskActionTypes.SET_TASK_LOADING,
  payload: data,
});
