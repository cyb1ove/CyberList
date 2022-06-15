import React, { useState, useMemo, useEffect } from 'react';
import useTypedDispatch from '../../../hooks/useTypedDispatch';
import Group from '../../atoms/Group';
import MuiButton from '../../atoms/Button';
import { BUTTON_ACTION, COLOR } from '../../../consts/index';
import StyledDiv from './styles';
import Input from '../../atoms/Input';
import { moveToTrashTaskData } from '../../../store/actions/task';

type Props = {
  _id: string;
  text: string;
}

const Task: React.FC<Props> = ({ _id, text }) => {
  const [inputMode, setInputMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useTypedDispatch();

  const TaskBody = useMemo(() => {
    if (inputMode) {
      return (
        <Input
          value={text}
          setValue={() => null}
          onBlur={() => setInputMode(false)}
        />
      );
    } else {
      return (
        <span style={{
          width: '100%',
          borderRadius: 4,
          background: COLOR.GRAY,
        }}>
          { text }
        </span>
      );
    }
  }, [inputMode, text]);

  const Button = useMemo(() => (
    <MuiButton
      action={BUTTON_ACTION.REMOVE}
      hide={inputMode}
      onClick={() => dispatch(moveToTrashTaskData(_id, setLoading))}
    />
  ), [inputMode]);

  return (
    <StyledDiv
      onDoubleClick={() => setInputMode(true)}
    >
      <Group
        left={TaskBody}
        right={Button}
      />
    </StyledDiv>
  );
};

export default Task;
