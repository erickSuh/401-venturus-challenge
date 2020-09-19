import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 840px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 16px 0 16px;
  
  .row {
    display: flex;
    justify-content: space-around;
    padding: 8px;
  }
`;
