import { Dispatch } from 'redux';
import { setData, setLoading } from '../action-creators/task';
import { axiosUploadData } from '../../services/requests';
import { TaskAction, RootState } from '../../types/task';

export const updateAllTaskData = (
  request: () => Promise<any>,
) => async (dispatch: Dispatch<TaskAction>): Promise<void> => {
  dispatch(setLoading(true));
  const result = await request();
  if (result instanceof Array) {
    dispatch(setData(result));
  } else {
    dispatch(setData([]));
  }
  dispatch(setLoading(false));
};

export const createTaskData = (text: string) => (
  async (dispatch: Dispatch<TaskAction>, getState: () => RootState): Promise<void> => {
    const { task: { tasks } } = getState();
    dispatch(setData([...tasks, 'loading']));
    axiosUploadData(text)
      .then((newTask) => {
        dispatch(setData([...tasks, newTask]));
      });
  });

export const updateTaskData = (
  request: (_id: string, ...args: any[]) => Promise<any>,
  _id: string,
  ...args: any[]
) => (
  async (dispatch: Dispatch<TaskAction>, getState: () => RootState): Promise<void> => {
    const { task: { tasks } } = getState();

    dispatch(setData(
      tasks.map((task) => (typeof task === 'object' && task._id === _id ? 'loading' : task)),
    ));
    request(_id, ...args)
      .then((data) => {
        let updatedTasks;

        if (data._id) {
          updatedTasks = tasks.map((task) => (typeof task === 'object' && task._id === _id ? data : task));
        } else {
          updatedTasks = tasks.filter((task) => typeof task === 'object' && task._id !== _id);
        }

        dispatch(setData(updatedTasks));
      });
  });
