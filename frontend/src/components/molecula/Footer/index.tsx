import React from 'react';
import Group from '../../atoms/Group';
import Statistics from '../../atoms/Statistics';
import MuiButton from '../../atoms/Button';

const Footer: React.FC = () => (
  <Group
    left={<Statistics />}
    right={<MuiButton action="Clear All" />}
  />
);

export default Footer;
