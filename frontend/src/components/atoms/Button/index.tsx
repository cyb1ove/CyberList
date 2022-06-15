import React from 'react';
import { Dispatch } from 'redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { COLOR, BUTTON_ACTION } from '../../../consts';
import { TaskAction } from '../../../types/task';

type Props = {
  action: string;
  onClick?: () => Promise<void>;
  hide?: boolean;
};

const MuiButton: React.FC<Props> = ({
  action,
  onClick = () => null,
  hide,
}) => {
  let label;

  const insertStyles = {
    visibility: hide ? 'hidden' : 'visible',
    border: '1px solid transparent',
    borderRadius: 1,
    color: 'white',
    fontSize: '1rem',
    background: COLOR.PRIMARY,
    '&:hover': {
      background: COLOR.PRIMARY,
    },
  };

  switch (action) {
    case BUTTON_ACTION.ADD:
      label = <AddIcon />;
      break;
    case BUTTON_ACTION.REMOVE:
      label = <DeleteIcon />;
      break;
    default:
      label = action || 'Button';
      break;
  }

  return (
    <IconButton
      sx={insertStyles}
      onClick={onClick}
    >
      { label }
    </IconButton>
  );
};

export default MuiButton;
