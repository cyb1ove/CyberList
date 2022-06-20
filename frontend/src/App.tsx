import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import useTypedDispatch from './hooks/useTypedDispatch';
import { updateAllTaskData } from './store/actions/task';
import Footer from './components/molecula/Footer';
import TaskGroup from './components/organisms/TaskGroup';
import TaskAdder from './components/molecula/TaskAdder';
import { axiosGetData } from './services/requests';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  padding: '2em 1em 1em 1em',
  width: '23rem',
};

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(updateAllTaskData(axiosGetData));
  }, []);

  return (
    <Paper elevation={8} sx={styles}>
      <span
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        Todo App
      </span>
      <TaskAdder />
      <TaskGroup setCount={setCount} />
      <Footer count={count} />
    </Paper>
  );
};

export default App;
