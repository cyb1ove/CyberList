import React, { useState, useCallback } from 'react';
import useTypedDispatch from '../../../hooks/useTypedDispatch';
import Group from '../../atoms/Group';
import MuiInput from '../../atoms/Input';
import MuiButton from '../../atoms/Button';
import { BUTTON_ACTION } from '../../../consts';
import { createTaskData } from '../../../store/actions/task';

const TaskAdder: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useTypedDispatch();

  const uploadTask = useCallback(() => {
    dispatch(createTaskData(value));
  }, [value]);

  return (
    <Group
      left={<MuiInput value={value} setValue={setValue} label="Add your new todo" />}
      right={<MuiButton action={BUTTON_ACTION.ADD} onClick={uploadTask} />}
    />
  );
};

export default TaskAdder;
