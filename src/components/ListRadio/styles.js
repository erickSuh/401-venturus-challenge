import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;

  h3 {
    color: ${(props) => (props.invalid ? props.theme.colors.invalid : '#aaa')};
    font-size: 14px;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;

  label {
    margin-right: 16px;
    color: ${(props) => (props.invalid ? props.theme.colors.invalid : '#aaa')};
  }

  input {
    margin-right: 8px;
  }

  input[type='radio'] {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border: 1px solid ${(props) => (props.invalid ? props.theme.colors.invalid : '#aaa')}; 
    border-radius: 50%;
    outline: none;
  }
  input[type='radio']:hover {
    box-shadow: 0 0 5px 0px orange inset;
  }
  input[type='radio']:before {
    content:'';
    display: block;
    width: 60%;
    height: 60%;
    margin: 20% auto;    
    border-radius: 50%;
  }
  input[type='radio']:checked:before {
    background: ${(props) => (props.invalid ? props.theme.colors.invalid : props.theme.colors.primary)};
  }
`;
