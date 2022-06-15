import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import useTypedSelector from './hooks/useTypedSelector';
import useTypedDispatch from './hooks/useTypedDispatch';
import { fetchTaskData } from './store/actions/task';
import Footer from './components/molecula/Footer';
import TaskGroup from './components/organisms/TaskGroup';
import TaskAdder from './components/molecula/TaskAdder';

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
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchTaskData());
  }, []);

  return (
    <Paper elevation={8} sx={styles}>
      <span>Todo App</span>
      <TaskAdder />
      <TaskGroup />
      <Footer />
    </Paper>
  );
};

export default App;
