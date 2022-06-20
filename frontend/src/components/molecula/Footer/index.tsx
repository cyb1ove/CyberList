import React, { useMemo } from 'react';
import useTypedDispatch from '../../../hooks/useTypedDispatch';
import Group from '../../atoms/Group';
import Statistics from '../../atoms/Statistics';
import MuiButton from '../../atoms/Button';
import useTypedSelector from '../../../hooks/useTypedSelector';
import { MODES } from '../../../consts';
import { setMode } from '../../../store/action-creators/task';
import { updateAllTaskData } from '../../../store/actions/task';
import { axiosMoveToTrash } from '../../../services/requests';

type Props = {
  count: number;
}

const Footer: React.FC<Props> = ({ count }) => {
  const { mode } = useTypedSelector((state) => state.task);
  const dispatch = useTypedDispatch();

  const newMode = useMemo(() => (
    MODES.filter((currentMode) => currentMode !== mode)[0]
  ), [mode]);

  return (
    <Group
      left={<Statistics count={count} />}
      right={(
        <div>
          <MuiButton action={newMode} onClick={() => dispatch(setMode(newMode))} />
          &nbsp;
          <MuiButton action="Clear All" onClick={() => dispatch(updateAllTaskData(axiosMoveToTrash))} />
        </div>
      )}
    />
  );
};

export default Footer;
