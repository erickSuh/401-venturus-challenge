import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
  font-size: 40px;
`;
