import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 400px;

  .left {
    width: 50%;
    height: 100%;
    border-right: 1px solid #aaa;

    &::after {
      content: "";
      display: block;
      width: 150px;
      height: 150px;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      border: 1px solid #aaa;
      margin-left: calc(100% - 75px);
      margin-top: -275px;
    }
  }

  .right {
    width: 50%;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: #fff;
      margin-bottom: 16px;
    }
  }

  .player-data {
    display: flex;
    flex-direction: row;
  }
`;

export const Player = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #fff;
  font-size: 60px;
`;

export const PickRateContainer = styled.div`
  display: flex;
  height: 150px;
  color: #fff;
  font-size: 32px;
  font-weight: 500;
`;

export const PickRate = styled.h3`
  display: flex;
  color: #fff;
  font-size: 32px;
  height: 40px;
  width: 80px;
  font-weight: 500;
  border-bottom: 4px solid #fff;
`;
