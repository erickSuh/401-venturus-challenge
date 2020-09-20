import React from 'react';
import PropTypes from 'prop-types';
import { CustomTextarea, Container, Label } from './styles';

function TextArea({
  id,
  value,
  label,
  type,
  role,
  invalid,
  row,
  column,
  maxLength,
  resizable,
  onChange,
  className,
  children,
  style,
}) {
  return (
    <Container className={className} style={style}>
      <Label htmlFor={id} invalid={invalid}>
        {label}
      </Label>
      <CustomTextarea
        id={id}
        value={value}
        role={role}
        type={type}
        row={row}
        column={column}
        maxLength={maxLength}
        resizable={resizable}
        onChange={onChange}
        invalid={invalid}
      />
      {children}
    </Container>
  );
}

TextArea.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  role: PropTypes.string,
  row: PropTypes.number,
  column: PropTypes.number,
  resizable: PropTypes.bool,
  maxLength: PropTypes.number,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default TextArea;
