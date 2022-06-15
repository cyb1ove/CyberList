import styled from 'styled-components';

const GroupDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  gap: 0.3rem;
  height: 2.5rem;
  & > * {
    line-height: 2.5rem;
    height: 100%;
  };
  & input {
    width: 100%;
  }
`;

export default GroupDiv;
