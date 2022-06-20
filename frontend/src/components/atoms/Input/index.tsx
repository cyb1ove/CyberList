import React, { Dispatch, SetStateAction } from 'react';
import { TextField } from '@material-ui/core';

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const MuiInput: React.FC<Props> = ({
  value,
  setValue,
  label = '',
  onBlur,
}) => (
  <TextField
    size="small"
    variant="outlined"
    value={value}
    fullWidth
    onChange={(event) => setValue(event.target.value)}
    label={label}
    onBlur={onBlur}
    autoFocus
  />
);

export default MuiInput;
