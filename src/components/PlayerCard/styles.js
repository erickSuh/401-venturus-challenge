import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

export const Content = styled.div`
  width: 100%;
  padding: 8px;
  margin: 4px;
  border: 1px dashed gray;
  background-color: white;
  float: left;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DataGroup = styled.div`
  display: flex;

  span {
    font-weight: 700;
    margin-right: 4px;
  }
`;
