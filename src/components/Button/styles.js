import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  min-height: 38px;
  color: #fff;
  background: linear-gradient(230deg, #803382 0%, #a2387c 100%);
  border: none;
  border-radius: 8px;
  box-shadow: rgb(255, 195, 245) 0px 3px 10px 4px;
  cursor: pointer;
  transition: transform 0.1s linear;

  &:focus {
    outline: none;
  }

  &:active {
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
  }

  .material-icons {
    color: #fff;
  }
`;
