import React from 'react';
import { Dispatch } from 'redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { COLOR, BUTTON_ACTION } from '../../../consts';
import { TaskAction } from '../../../types/task';

type Props = {
  action: string;
  onClick?: () => void;
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
    textTransform: 'capitalize',
    '&:hover': {
      background: COLOR.PRIMARY,
    },
  };

  let specificStyles = {};
  switch (action) {
    case BUTTON_ACTION.ADD:
      label = <AddIcon />;
      break;
    case BUTTON_ACTION.REMOVE:
      label = <DeleteIcon />;
      break;
    case BUTTON_ACTION.REVERT:
      label = <AutorenewIcon />;
      break;
    default:
      specificStyles = {
        width: '5rem',
      };
      label = action || 'Button';
      break;
  }

  return (
    <IconButton
      sx={{ ...insertStyles, ...specificStyles }}
      onClick={onClick}
    >
      { label }
    </IconButton>
  );
};

export default MuiButton;
