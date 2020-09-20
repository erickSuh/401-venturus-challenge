import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: ${(props) => (props.theme.fonts.fontFamily)};
    color: ${(props) => (props.theme.colors.primary)};
    margin: 0;
    padding: 0;
    background: transparent;
    font-size: 12px;
    box-sizing: border-box;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }

  label {
    font-size: 14px;
  }

  span {
    font-size: 12px;
  }

  p {
    font-size: 12px;
  }

  select {
    border: none;
  }

  @-webkit-keyframes fadeUpAnimation {
    0%   { opacity: 0; transform: translateY(20px) }
    100% { opacity: 1; transform: translateY(0) }
  }
  @-moz-keyframes fadeUpAnimation {
    0%   { opacity: 0; transform: translateY(20px) }
    100% { opacity: 1; transform: translateY(0) }
  }
  @-o-keyframes fadeUpAnimation {
    0%   { opacity: 0; transform: translateY(20px) }
    100% { opacity: 1; transform: translateY(0) }
  }
  @keyframes fadeUpAnimation {
    0%   { opacity: 0; transform: translateY(20px) }
    100% { opacity: 1; transform: translateY(0) }
  }

  .fadeUp {
    -webkit-animation: fadeUpAnimation 1s; /* Safari 4+ */
    -moz-animation:    fadeUpAnimation 1s; /* Fx 5+ */
    -o-animation:      fadeUpAnimation 1s; /* Opera 12+ */
    animation:         fadeUpAnimation 1s; /* IE 10+, Fx 29+ */
  }

  body {
    color: ${(props) => (props.theme.colors.primary)};
    background: #f7f3f7;
  }
`;
