import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 840px) {
    flex-direction: row;
  }
`;
