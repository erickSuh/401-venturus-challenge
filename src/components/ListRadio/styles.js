import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;

  h3 {
    color: #aaa;
    font-size: 14px;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;

  label {
    display: flex;
    align-items: center;
    color: #aaa;

    &:not(:last-child) {
      margin-right: 40px;
    }

    input {
      margin-right: 8px;
    }
  }
`;
