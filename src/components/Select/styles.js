import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 16px;
  display: inline-block;
  overflow: hidden;

  select {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    padding: 3px;

    &:focus {
      outline: none;
    }
  }
`;
