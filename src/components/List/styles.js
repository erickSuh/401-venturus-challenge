import styled from 'styled-components';

const InfoBase = styled.div`
  font-size: 16px;
`;

export const NameContainer = styled(InfoBase)`
  width: 35%;
`;

export const DescriptionContainer = styled(InfoBase)`
  width: 100%;
`;

export const Container = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s linear;
  min-height: 40px;
  font-weight: 550;

  &:hover {
    padding: 8px;
    background: #f7eef7;
    color: #b13d7c;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 8px;
  font-size: 16px;

  .material-icons {
    margin-left: 4px;
    margin-right: 4px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }

  /* Tooltip container */
  .tooltip {
    position: relative;
    display: inline-block;
    border: none;

    &:focus {
      outline: none;
    }
  }

  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    width: 120px;
    bottom: 110%;
    left: 50%;
    margin-left: -58px;
  
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 1s;

    &:after {
      content: " ";
      position: absolute;
      top: 100%; /* At the bottom of the tooltip */
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;
