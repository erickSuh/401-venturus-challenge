import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;

  ul {
    margin-top: 8px;
    list-style-type: none;
    border-radius: 16px;
    border: 1px solid #aaa;
    background: #aaa;

    li {
      display: flex;
      justify-content: space-between;
      padding: 16px;
      border-radius: 16px;
      border: 1px solid #aaa;
      background: #fff;

      span {
        color: black;

        b { 
          color: black;
        }
      }
    }
  }
`;
