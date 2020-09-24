import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px dashed #aaa;
  padding: 4px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  font-size: 36px;

  i {
    font-size: 36px;
    color: #fff;
  }

  .tooltip {
    position: relative;
    display: inline-block;
    font-size: 36px;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: -100%;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
`;
