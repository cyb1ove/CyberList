import styled from 'styled-components';
import { COLOR } from '../../../consts';

const StyledDiv = styled.div`
  & button {
    display: none;
    position: absolute;
    right: 0;
    border-radius: 0;
    background: ${COLOR.RED};
  }
  &:hover button {
    border-radius: 0 4px 4px 0;
    display: block;
  }
  & span {
    padding-left: 0.9em;
  }
`;

export default StyledDiv;
