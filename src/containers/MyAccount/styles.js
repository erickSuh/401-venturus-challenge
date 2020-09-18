import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 16px;
  
  .row {
    display: flex;
    justify-content: space-around;
  }
`;
