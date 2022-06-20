import React from 'react';
import useTypedSelector from '../../../hooks/useTypedSelector';
import { Mode } from '../../../types/task';

type Props = {
  count: number;
}

const status: {
  [key in Mode]: string;
} = {
  main: 'panding',
  trash: 'completed',
};

const Statistics: React.FC<Props> = ({ count }) => {
  const { mode } = useTypedSelector((state) => state.task);

  return (
    <span
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '12rem',
      }}
    >
      You have {count} {status[mode]} tasks
    </span>
  );
};

export default Statistics;
