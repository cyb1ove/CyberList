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

export const axiosMoveToTrash = async (_id: string) => {
  const result = axios
    .put('/task/clear', {
      _id,
    })
    .then((response) => response.data);

  return result;
};
