import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const Label = styled.label`
  width: 100%;
  font-weight: 600;
  color: ${(props) => (props.invalid ? props.theme.colors.invalid : '#aaa')};
`;

export const CustomTextarea = styled.textarea`
  width: 100%;
  height: calc(100% - 20px);
  padding: 4px;
  font-size: 14px;
  background: none;
  border: none;
  border-radius: 6px;
  border: ${(props) => (props.invalid ? `2px solid ${props.theme.colors.invalid}` : '2px solid #dadada')};
  margin-top: 4px;
  resize: ${(props) => (props.resizable ? 'auto' : 'none')};

  &:focus {
    outline: none;
    background: white;
    border: 2px solid #dadada;
  }
`;
