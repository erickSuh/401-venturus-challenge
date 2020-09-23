import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px;

  h3 {
    color: #aaa;
    font-size: 14px;
  }

  .tagify {
    margin-top: 4px;
    border-radius: 8px;
    border: 2px solid #dadada;
    min-height: 80px;
    --tag-bg: ${(props) => props.theme.colors.invalid};

    span {
      color: #fff;
    }

    .tagify__input {
      color: black;
    }

    div:before {
      border-radius: 16px;
    }
  }
`;
