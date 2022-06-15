import React from 'react';
import useTypedSelector from '../../../hooks/useTypedSelector';

const Statistics: React.FC = () => {
  const { activeTasks } = useTypedSelector((state) => state.task);

  return (
    <span>
      You have {activeTasks.length} pending tasks
    </span>
  );
};

export default Statistics;
