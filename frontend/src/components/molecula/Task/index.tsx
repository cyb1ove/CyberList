import React, { useState, useMemo } from 'react';
import useTypedDispatch from '../../../hooks/useTypedDispatch';
import Group from '../../atoms/Group';
import MuiButton from '../../atoms/Button';
import { BUTTON_ACTION, COLOR } from '../../../consts/index';
import StyledDiv from './styles';
import MuiInput from '../../atoms/Input';
import { updateTaskData } from '../../../store/actions/task';
import {
  axiosMoveToTrash,
  axiosCompleteTask,
  axiosRevertTask,
  axiosChangeTask,
} from '../../../services/requests';
import useTypedSelector from '../../../hooks/useTypedSelector';

type Props = {
  _id: string;
  text: string;
}

const Task: React.FC<Props> = ({ _id, text }) => {
  const { mode } = useTypedSelector((state) => state.task);
  const [inputMode, setInputMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(text);
  const dispatch = useTypedDispatch();

  let timer: ReturnType<typeof setTimeout>;
  let prevent = false;

  const handleSubmit = (
    event: React.ChangeEvent<HTMLInputElement>
    | React.FocusEvent<HTMLInputElement>
    | React.FormEvent<HTMLFormElement>,
  ) => {
    if (value !== text) {
      event.preventDefault();
      dispatch(updateTaskData(axiosChangeTask, _id, value));
    }
    setInputMode(false);
  };

  const TaskBody = useMemo(() => {
    if (inputMode) {
      return (
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
          }}
        >
          <MuiInput
            value={value}
            setValue={setValue}
            onBlur={handleSubmit}
          />
        </form>
      );
    } else {
      return (
        <span style={
          {
            width: '100%',
            borderRadius: 4,
            background: COLOR.GRAY,
          }
       }>
          { value }
        </span>
      );
    }
  }, [inputMode, value]);

  const Button = useMemo(() => (
    <MuiButton
      action={mode === 'trash' ? BUTTON_ACTION.REVERT : BUTTON_ACTION.REMOVE}
      hide={inputMode}
      onClick={() => (
        dispatch(
          updateTaskData(
            mode === 'trash' ? axiosRevertTask : axiosMoveToTrash,
            _id,
          ),
        )
      )}
    />
  ), [inputMode]);

  const handleClick = () => {
    if (mode === 'main') {
      timer = setTimeout(() => {
        if (!prevent) {
          dispatch(updateTaskData(axiosCompleteTask, _id));
        }
      }, 300);
    }
  };

  const handleDoubleClick = () => {
    clearTimeout(timer);
    prevent = true;
    setInputMode(true);
  };

  return (
    <StyledDiv
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <Group
        left={TaskBody}
        right={Button}
      />
    </StyledDiv>
  );
};

export default Task;
