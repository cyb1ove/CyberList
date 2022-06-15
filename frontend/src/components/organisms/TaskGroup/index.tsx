import React from 'react';
import useTypedSelector from '../../../hooks/useTypedSelector';
import Task from '../../molecula/Task';
import StyledDiv from './styles';

const TaskGroup: React.FC = () => {
  const { activeTasks } = useTypedSelector((state) => state.task);

  return (
    <StyledDiv>
      {activeTasks.map(({ _id, text }) => (
        <Task key={_id} _id={_id} text={text} />
      ))}
      {/* <Task text="fdd" /> */}
    </StyledDiv>
  );
};

export default TaskGroup;
