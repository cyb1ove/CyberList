import { Dispatch } from 'redux';
import { Dispatch as ReactDispatch, SetStateAction } from 'react';
import { setData, setLoading } from '../action-creators/task';
import { axiosGetData, axiosUploadData, axiosMoveToTrash } from '../../services/requests';
import { TaskAction } from '../../types/task';

export const fetchTaskData = () => async (dispatch: Dispatch<TaskAction>): Promise<void> => {
  dispatch(setLoading(true));
  const result = await axiosGetData();
  dispatch(setData(result));
  dispatch(setLoading(false));
};

export const createTaskData = (text: string) => (
  async (dispatch: Dispatch<TaskAction>): Promise<void> => {
    const result = await axiosUploadData(text);
    dispatch(setData(result));
  });

export const moveToTrashTaskData = (_id: string, setLoading: ReactDispatch<SetStateAction<boolean>>) => (
  async (dispatch: Dispatch<TaskAction>): Promise<void> => {
    setLoading(true);
    const result = await axiosMoveToTrash(_id);
    dispatch(setData(result));
    setLoading(false);
  });
