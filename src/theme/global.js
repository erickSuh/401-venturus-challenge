import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    color: ${(props) => (props.theme.colors.primary)};
    margin: 0;
    padding: 0;
    background: ${(props) => (props.theme.colors.background)};
  }

  body {
    color: ${(props) => (props.theme.colors.primary)};
    background: #f7f3f7;
  }
`;
