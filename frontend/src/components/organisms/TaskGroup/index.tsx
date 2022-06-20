import React, {
  useMemo,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import ReactLoading from 'react-loading';
import useTypedSelector from '../../../hooks/useTypedSelector';
import Task from '../../molecula/Task';
import StyledDiv from './styles';
import { COLOR } from '../../../consts';

type Props = {
  setCount: Dispatch<SetStateAction<number>>;
}

const TaskGroup: React.FC<Props> = ({ setCount }) => {
  const { tasks, loading, mode } = useTypedSelector((state) => state.task);

  const filteredTasks = useMemo(() => {
    switch (mode) {
      case 'main':
        return tasks.filter((task) => task === 'loading' || (!task._trash && !task.isCompleted));
      case 'trash':
        return [
          ...tasks.filter((task) => task === 'loading' || task.isCompleted),
          ...tasks.filter((task) => task === 'loading' || task._trash),
        ];
      default:
        return tasks;
    }
  }, [tasks, mode]);

  useEffect(() => {
    setCount(filteredTasks.length);
  }, [filteredTasks]);

  if (loading) {
    return <ReactLoading type="spinningBubbles" color={COLOR.PRIMARY} height="10rem" width="100%" />;
  }

  return (
    <StyledDiv>
      {filteredTasks.map((task) => {
        if (task === 'loading') {
          return <ReactLoading key="fsdfa" type="bubbles" color={COLOR.PRIMARY} height="2rem" width="100%" />;
        } else {
          const { _id, text } = task;

          return (
            <Task
              key={_id}
              _id={_id}
              text={text}
            />
          );
        }
      })}
    </StyledDiv>
  );
};

export default TaskGroup;
