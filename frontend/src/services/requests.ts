import axios from './api';

export const axiosGetData = async () => {
  const result = axios
    .get('/task/')
    .then((response) => response.data);

  return result;
};

export const axiosUploadData = async (text: string) => {
  const result = axios
    .post('/task/create', {
      text,
    })
    .then((response) => response.data);

  return result;
};

export const axiosMoveToTrash = async (id?: string) => {
  const result = axios
    .delete('/task/', {
      params: {
        ...(id ? { id } : {}),
      },
    })
    .then((response) => response.data);

  return result;
};

export const axiosCompleteTask = async (_id: string) => {
  const result = axios
    .put('/task/complete', {
      _id,
    })
    .then((response) => response.data);

  return result;
};

export const axiosRevertTask = async (_id: string) => {
  const result = axios
    .put('/task/revert', {
      _id,
    })
    .then((response) => response.data);

  return result;
};

export const axiosChangeTask = async (_id: string, value: string) => {
  const result = axios
    .put('/task/edit', {
      _id, value,
    })
    .then((response) => response.data);

  return result;
};
