import React, { ReactNode } from 'react';
import GroupDiv from './styles';

type Props = {
  left: ReactNode | string;
  right: ReactNode | string;
}

const Group: React.FC<Props> = ({ left, right }) => (
  <GroupDiv>
    {left}
    {right}
  </GroupDiv>
);

export default Group;
