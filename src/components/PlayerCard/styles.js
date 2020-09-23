import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
`;

export const Content = styled.div`
  width: 100%;
  padding: 16px;
  margin: 4px;
  border: 1px dashed gray;
  background-color: white;
  float: left;
  background: linear-gradient(180deg, #f8f8f8, #d1d1d1);
`;

export const Row = styled.div`
  padding: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DataGroup = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.invalid};

  span {
    font-weight: 700;
    margin-right: 4px;
    color: black;
  }
`;
